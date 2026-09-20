"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { GetUser } from './firestore';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!isMounted) return;
      
      console.log("Auth state changed", firebaseUser?.name);
      
      if (firebaseUser) {
        // User is logged in
        setUser(firebaseUser);
        
        // Fetch user data from Firestore
        try {
          const dbProfile = await GetUser({ email: firebaseUser.email });
          if (isMounted) setProfile(dbProfile);
          console.log("User profile loaded:", dbProfile);
        } catch (error) {
          console.error('Error fetching user data:', error);
          if (isMounted) setProfile({});
        }
      } else {
        // User is logged out
        console.log("User logged out.");
        setUser(null);
        setProfile(null);
      }
      if (isMounted) setLoading(false);
    });

    // Cleanup subscription
    return () => {
      isMounted = false;
      unsubscribe();
    };  
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
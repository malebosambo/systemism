"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { GetUser } from './firestore';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
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
          const dbUser = await GetUser({ email: firebaseUser.email });
          if (isMounted) setUserData(dbUser);
          console.log("User data loaded:", dbUser);
        } catch (error) {
          console.error('Error fetching user data:', error);
          if (isMounted) setUserData({});
        }
      } else {
        // User is logged out
        console.log("User logged out.");
        setUser(null);
        setUserData(null);
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
    <AuthContext.Provider value={{ user, userData, loading }}>
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
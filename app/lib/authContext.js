"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, reload } from 'firebase/auth';
import { auth } from '../../firebase';
import { GetProfile } from './firestore';

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
      
      console.log("Auth state changed", firebaseUser?.email);
      
      if (!firebaseUser) {
        setUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }
      
      try {
        
        await reload(firebaseUser);
        
        if (!firebaseUser.emailVerified) {
          await auth.signOut();
          
          if (isMounted) {
            setUser(null);
            setProfile(null);
          }
          
          return;
        }
          
        const dbProfile = await GetProfile(firebaseUser.uid);
          
        if (isMounted) {
          setProfile(dbProfile);
          setUser(firebaseUser);
        }
        console.log("User profile loaded:", dbProfile);
      } catch (error) {
        console.error('Error fetching user data:', error);
        
        if (isMounted) {
          setUser(null);
          setProfile(null);
        }
      
      } finally {
        
        if (isMounted) setLoading(false);
        
      }
      
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
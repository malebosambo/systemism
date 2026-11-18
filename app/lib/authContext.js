"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, reload, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { ReadProfile } from './firestore';

const AuthContext = createContext({
  user: null,
  profile: null,
  loading: true
});

export function AuthProvider({ children }) {
  
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    let isMounted = true;
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      
      /*
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
          
          await signOut(auth);
          
          if (isMounted) {
            
            setUser(null);
            setProfile(null);
            
          }
          
          return;
        }
          
        const dbProfile = await ReadProfile(firebaseUser);
          
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
    */
    
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      },
      () => setLoading(false),
    );

    return unsubscribe;
    
    });
    /*
    // Cleanup subscription
    return () => {
      
      isMounted = false;
      unsubscribe();
      
    };
    */
  }, []);

  return (
    
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
    
  );
}

export function useAuth() {
  /*
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  */
  return useContext(AuthContext);
  
}
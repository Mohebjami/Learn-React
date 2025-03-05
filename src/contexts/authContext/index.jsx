
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleUnload = () => {
      if (auth.currentUser) {
        signOut(auth);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      initializeUser(user);
    });

    window.addEventListener("unload", handleUnload);

    return () => {
      unsubscribe();
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

  const handleBeforeUnload = (event) => {
    if (auth.currentUser) {
      signOut(auth);
    }
  };

  const initializeUser = async (user) => {
    if (user) {
      setCurrentUser({ ...user });

      // Check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }

    setLoading(false);
  };

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthContext };

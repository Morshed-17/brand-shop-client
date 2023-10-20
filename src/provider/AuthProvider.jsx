import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
  };
  const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
  }
  
  const logOut = () => {
   return signOut(auth)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const handleUpdateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      })
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
    });
    return () => unSubscribe
  }, [])

  const authInfo = {
    createUser,
    user,
    googleLogin,
    logIn,
    logOut,
    handleUpdateUser

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

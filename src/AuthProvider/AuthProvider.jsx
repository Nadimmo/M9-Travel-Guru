/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

const GoogleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);

    const register = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
       
    }

    const profileUpdate = (name)=>{
        // Update the user profile
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name
        })
        }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })

        return ()=>{
            Unsubscribe()
        }
    },[auth])

    const userInfo = {
        register,
        login,
        user,
        logOut,
        profileUpdate,
        loading,
        loginWithGoogle
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
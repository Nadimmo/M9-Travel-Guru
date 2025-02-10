/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../page/Hooks/useAxiosPublic";

const GoogleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic()

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
      
            const userInfo = {
                email: currentUser?.email
            }
            if(currentUser){
                axiosPublic.post('/jwt',userInfo)
                .then((res)=>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('token')
            }
        })

        return ()=>{
            Unsubscribe()
        }
    },[axiosPublic])

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
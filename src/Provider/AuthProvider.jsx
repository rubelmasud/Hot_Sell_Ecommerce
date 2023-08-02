import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const GoogleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const UserLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log(currentUser, 'currentUser');
            }
            else {
                console.log('User is not logged in.');
                setUser(null);
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        };
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInGoogle,
        UserLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
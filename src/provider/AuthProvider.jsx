import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'

const AuthProvider = ({children}) => {
    //use state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user function
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign In  function
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Sign Out function
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //onAuthStateChanged
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user is the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    // provider value
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config'

const AuthProvider = ({children}) => {
    //use state
    const [user, setUser] = useState(null);

    // create user function
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign In  function
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Sign Out function
    const logout = () =>{
        return signOut(auth);
    }

    //onAuthStateChanged
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user is the auth state change', currentUser);
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    // provider value
    const authInfo = {
        user,
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
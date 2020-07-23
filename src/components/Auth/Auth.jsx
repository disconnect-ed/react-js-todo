import React, { useEffect, useState } from "react";
import app from "../../base";
import {useDispatch, useSelector} from "react-redux";
import {isPending, setCurrentUser} from "../../redux/actions/auth-action";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const currentUser = useSelector(state => state.auth.currentUser)
    const pending = useSelector(state => state.auth.pending)
    const dispatch = useDispatch()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            dispatch(setCurrentUser(user))
            dispatch(isPending(false))
            // setCurrentUser(user)
            // setPending(false)
        });
    }, []);

    if(pending){
        return <>Loading...</>
    }
    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
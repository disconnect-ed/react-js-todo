import React from 'react'
import firebaseConfig from "firebase";

export const Logout = () => {
    return (
        <button onClick={() => firebaseConfig.auth().signOut()}>Выйти</button>
    )
}
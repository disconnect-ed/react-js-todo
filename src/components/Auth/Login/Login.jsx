import React, {useCallback, useContext} from "react";
import {AuthContext} from "../Auth";
import {NavLink, Redirect} from "react-router-dom";
import firebaseConfig from "firebase";

export const Login = ({history, img}) => {
    // const bgImg = {
    //     backgroundImage: `url(${img})`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     minHeight: '100vh'
    // }
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseConfig
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/all");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/all" />;
    }
    return (
        <div >
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Log in</button>
            </form>
            <NavLink to='/signup'>Нету аккаунта? Зарегестрируйтесь!</NavLink>
        </div>
    )
}
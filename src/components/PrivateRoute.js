import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = useSelector(state => state.auth.currentUser)
    console.log(currentUser)
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
    )
}
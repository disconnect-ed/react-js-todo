import React, {useState, useEffect} from 'react';
import './MainStyles/App.sass';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import InfoScreenContainer from "./components/InfoScreen/InfoScreenContainer";
import ListContainer from "./components/List/AllListContainer";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import CreateContainer from "./components/CreateAndEdit/CreateContainer";
import ViewContainer from "./components/View/ViewContainer";
import FavoriteListContainer from "./components/List/FavoriteListContainer";
import UrgentListContainer from "./components/List/UrgentListContainer";
import SearchListContainer from "./components/List/SearchListContainer";
import {useDispatch, useSelector} from 'react-redux'
import EditContainer from "./components/CreateAndEdit/EditContainer";
import {getAllTodosList, setTheme} from "./redux/actions/app-action";
import {getTheme} from "./components/utils/methods";
import {Login} from "./components/Auth/Login/Login";
import {Main} from "./components/Main";
import {PrivateRoute} from "./components/PrivateRoute";
import {SignUp} from "./components/Auth/SignUp/SignUp";

function App() {
    const [img, setImg] = useState(null)
    const [color, setColor] = useState(null)
    const [textColor, setTextColor] = useState(null)
    const [activeClass, setActiveClass] = useState(null)

    // const [menu, showMenu] = useState(false)
    const dispatch = useDispatch()
    // const currentUser = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        const theme = getTheme()
        setImg(theme.img)
        setColor(theme.color)
        setTextColor(theme.textColor)
        setActiveClass(theme.active)
        dispatch(setTheme(theme.active))
    }, [img, color, textColor, activeClass])

    // useEffect(() => {
    //     dispatch(getAllTodosList())
    // }, [dispatch])


    return (
        <>
            <PrivateRoute path='/' component={Main} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp}/>
        </>

    );
}

export default App;

import React, {useState, useEffect} from 'react';
import '../MainStyles/App.sass';
import NavbarContainer from "./Navbar/NavbarContainer";
import InfoScreenContainer from "./InfoScreen/InfoScreenContainer";
import ListContainer from "./List/AllListContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import CreateContainer from "./CreateAndEdit/CreateContainer";
import ViewContainer from "./View/ViewContainer";
import FavoriteListContainer from "./List/FavoriteListContainer";
import UrgentListContainer from "./List/UrgentListContainer";
import SearchListContainer from "./List/SearchListContainer";
import {useDispatch, useSelector} from 'react-redux'
import EditContainer from "./CreateAndEdit/EditContainer";
import {getAllTodosList, setTheme} from "../redux/actions/app-action";
import {getTheme} from "./utils/methods";
import {Login} from "./Auth/Login/Login";

export const Main = () => {
    const [img, setImg] = useState(null)
    const [color, setColor] = useState(null)
    const [textColor, setTextColor] = useState(null)
    const [activeClass, setActiveClass] = useState(null)

    const [menu, showMenu] = useState(false)
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        const theme = getTheme()
        setImg(theme.img)
        setColor(theme.color)
        setTextColor(theme.textColor)
        setActiveClass(theme.active)
        dispatch(setTheme(theme.active))
    }, [img, color, textColor, activeClass])

    useEffect(() => {
        dispatch(getAllTodosList())
    }, [dispatch])


    return (
        <div className="app">
            <div className="app-block">
                <NavbarContainer showMenu={showMenu} menu={menu} textColor={textColor} activeClass={activeClass}
                                 textColor={textColor}/>
            </div>
            <div className="app-block_main">
                <InfoScreenContainer showMenu={showMenu} menu={menu} color={color} img={img}/>
                <Switch>

                    <Route exact path={'/all'} render={() => <ListContainer textColor={textColor}/>}/>
                    <Route exact path={'/search'} render={() => <SearchListContainer textColor={textColor}/>}/>
                    <Route exact path={'/add'} render={() => <CreateContainer textColor={textColor}/>}/>
                    <Route exact path={'/favorite'} render={() => <FavoriteListContainer textColor={textColor}/>}/>
                    <Route exact path={'/urgent'} render={() => <UrgentListContainer textColor={textColor}/>}/>
                    <Route exact path={'/todo/:id'} render={() => <ViewContainer textColor={textColor}/>}/>
                    <Route exact path={'/edit/:id'} render={() => <EditContainer textColor={textColor}/>}/>
                    <Route exact path={'*'} render={() => <Redirect to='/all'/>}/>
                </Switch>

            </div>
            <div className={`app-bg ${menu && 'app-bg_active'}`}></div>
        </div>
    );
}
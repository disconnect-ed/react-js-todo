import React, {useState, useEffect} from 'react';
import './MainStyles/App.sass';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import InfoScreenContainer from "./components/InfoScreen/InfoScreenContainer";
import ListContainer from "./components/List/AllListContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import CreateContainer from "./components/CreateAndEdit/CreateContainer";
import ViewContainer from "./components/View/ViewContainer";
import FavoriteListContainer from "./components/List/FavoriteListContainer";
import UrgentListContainer from "./components/List/UrgentListContainer";
import SearchListContainer from "./components/List/SearchListContainer";
import {useDispatch} from 'react-redux'
import EditContainer from "./components/CreateAndEdit/EditContainer";
import {getAllTodosList, setTheme} from "./redux/actions/app-action";
import {getTheme} from "./components/utils/methods";

function App() {
    const [img, setImg] = useState(null)
    const [color, setColor] = useState(null)
    const [textColor, setTextColor] = useState(null)
    const [activeClass, setActiveClass] = useState(null)

    const [menu, showMenu] = useState(false)
    const dispatch = useDispatch()

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
        <NavbarContainer showMenu={showMenu} menu={menu} textColor={textColor} activeClass={activeClass} textColor={textColor} />
      </div>
      <div className="app-block_main">
        <InfoScreenContainer showMenu={showMenu} menu={menu} color={color} img={img}/>
          <Switch>
              <Route exact path={'/all'} render={() => <ListContainer textColor={textColor} />} />
              <Route exact path={'/search'} render={() => <SearchListContainer textColor={textColor} />} />
              <Route exact path={'/add'} render={() => <CreateContainer textColor={textColor} />} />
              <Route exact path={'/favorite'} render={() => <FavoriteListContainer textColor={textColor} />} />
              <Route exact path={'/urgent'} render={() => <UrgentListContainer textColor={textColor} />} />
              <Route exact path={'/todo/:id'} render={() => <ViewContainer textColor={textColor} />} />
              <Route exact path={'/edit/:id'} render={() => <EditContainer textColor={textColor} />} />
              <Route exact path={'*'} render={() => <Redirect to='/all' />} />
          </Switch>

      </div>
        <div className={`app-bg ${menu && 'app-bg_active'}`}></div>
    </div>
  );
}

export default App;

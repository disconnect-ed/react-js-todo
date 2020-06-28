import React, {useState, useEffect} from 'react';
import './App.sass';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import InfoScreenContainer from "./components/InfoScreen/InfoScreenContainer";
import ListContainer from "./components/List/AllListContainer";
import day from "./assets/img/2.png";
import morning from './assets/img/1.png'
import evening from './assets/img/3.png'
import night from './assets/img/4.png'
import {Redirect, Route, Switch} from "react-router-dom";
import CreateContainer from "./components/CreateAndEdit/CreateContainer";
import ViewContainer from "./components/View/ViewContainer";
import FavoriteListContainer from "./components/List/FavoriteListContainer";
import UrgentListContainer from "./components/List/UrgentListContainer";
import SearchListContainer from "./components/List/SearchListContainer";
import {useDispatch} from 'react-redux'
import EditContainer from "./components/CreateAndEdit/EditContainer";
import {getTodoList, setTheme} from "./redux/actions/app-action";

function App() {
    const [img, setImg] = useState(null)
    const [color, setColor] = useState(null)
    const [textColor, setTextColor] = useState(null)
    const [activeClass, setActiveClass] = useState(null)
    const dispatch = useDispatch()


    useEffect(() => {
        getTheme()
    }, [img, color, textColor, activeClass])

    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch])

    const getTheme = () => {
        const hours = new Date().getHours()
        if (hours > 4 && hours < 9) {
            setImg(morning)
            setColor('138, 148, 127')
            setTextColor('rgb(138, 148, 127)')
            setActiveClass('morning')
            dispatch(setTheme('morning'))
            return
        }
        if (hours >= 9 && hours <= 16) {
            setImg(day)
            setColor('106, 186, 177')
            setTextColor('rgb(106, 186, 177)')
            setActiveClass('day')
            dispatch(setTheme('day'))
            return
        }
        if (hours > 16 && hours <= 22) {
            setImg(evening)
            setColor('176, 103, 98')
            setTextColor('rgb(176, 103, 98)')
            setActiveClass('evening')
            dispatch(setTheme('evening'))
            return
        }
        if (hours > 22 || hours <= 4) {
            setImg(night)
            setColor('56, 64, 95')
            setTextColor('rgb(56, 64, 95)')
            setActiveClass('night')
            dispatch(setTheme('night'))
            return
        }
    }

  return (
    <div className="app">
      <div className="app-block">
        <NavbarContainer textColor={textColor} activeClass={activeClass} textColor={textColor} />
      </div>
      <div className="app-block_main">
        <InfoScreenContainer color={color} img={img}/>
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
    </div>
  );
}

export default App;

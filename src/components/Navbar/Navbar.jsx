import React from "react";
import './Navbar.sass'
import {NavLink} from "react-router-dom";
import { faListUl, faStar, faFire, faPlus } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Navbar = ({date, activeClass, textColor, searchQuery, searchTodo, menu, showMenu}) => {
    const style = {color: textColor}
    const styleInput = {color: textColor, border: `2px solid ${textColor}`}

    return(
        <nav className={`nav ${menu ? 'nav-active' : ''}`}>
            <div className="nav-search">
                <input value={searchQuery} onChange={(event => searchTodo(event.currentTarget.value))}
                       placeholder='Поиск...' style={{...styleInput}} type="text" className="nav-search__input"/>
            </div>

            <ul className="nav-list">
                <li className="nav-list__link">
                    <NavLink onClick={() => showMenu(false)}
                             className={activeClass + '-hover'}
                             style={{...style}}
                             activeClassName={activeClass} to='/all'>
                        <span><FontAwesomeIcon icon={faListUl} /></span>
                        Все
                    </NavLink>
                </li>
                <li className="nav-list__link">
                    <NavLink onClick={() => showMenu(false)}
                             className={activeClass + '-hover'}
                             style={{...style}}
                             activeClassName={activeClass} to='/favorite'>
                        <span><FontAwesomeIcon icon={faStar} /></span>
                        Избранные
                    </NavLink>
                </li>
                <li className="nav-list__link">
                    <NavLink onClick={() => showMenu(false)}
                             className={activeClass + '-hover'}
                             style={{...style}}
                             activeClassName={activeClass} to='/urgent'>
                        <span><FontAwesomeIcon icon={faFire} /></span>
                        Срочные
                    </NavLink>
                </li>
                <li className="nav-list__link">
                    <NavLink onClick={() => showMenu(false)}
                             className={activeClass + '-hover'}
                             style={{...style}}
                             activeClassName={activeClass} to='/add'>
                        <span><FontAwesomeIcon icon={faPlus} /></span>
                        Добавить
                    </NavLink>
                </li>
            </ul>
            <div style={{...style}} className="nav-date">
                <h3>Текущая дата</h3>
                <h4>{date}</h4>
            </div>


        </nav>
    )
}

export default Navbar
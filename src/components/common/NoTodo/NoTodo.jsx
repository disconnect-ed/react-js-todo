import React from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faSmile} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './NoTodo.sass'
import {NavLink} from "react-router-dom";

export const NoTodo = ({textColor, title = 'Дел не найдено'}) => {
    const style = {color: textColor}
    return (
        <div style={{...style}} className='no'>
            <div className="no__icon">
                <FontAwesomeIcon  icon={faSmile}/>
            </div>
            <h3 className="no__title">{title}</h3>
            <NavLink className='no__link' style={{...style}} to='/add'>
                <span><FontAwesomeIcon icon={faPlus} /></span>
                Добавить дело
            </NavLink>
        </div>
    )
}
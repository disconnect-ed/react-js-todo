import React from "react";
import './View.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

export const View = ({todo, textColor, deleteTodo}) => {
    const style = {color: textColor}

    return (
        <section className="view">
            <h2 style={{...style}} className='create__title'>{todo.title}</h2>
            <div className="view__info">
                <h3 style={{...style}} className='view__subtitle'>Дата создания:</h3>
                <p style={{...style}} className='view__text'>{todo.date}</p>
            </div>

            {todo.text ?
                <>
                    <div className="view__info">
                        <h3 style={{...style}} className='view__subtitle'>Описание: </h3>
                        <p className='view__text' style={{...style}}>{todo.text}</p>
                    </div>

                </> :
                <div className="view__info">
                    <h3 style={{...style}} className='view__subtitle'>Описание отсутствует</h3>
                </div>

            }
            <div className="view__info">
                <h3 style={{...style}} className='view__subtitle'>Действия</h3>

                <div className="view__actions">
                    <NavLink style={{color: textColor}} className='view__action' to={`/edit/${todo.id}`}>
                        <span><FontAwesomeIcon  icon={faPencilAlt}/></span>
                         Редактировать
                    </NavLink>
                    <NavLink style={{color: textColor}} onClick={() => deleteTodo(todo.id)} className='view__action' to={`/all`}>
                        <span><FontAwesomeIcon  icon={faCheck}/></span>
                         Выполнить
                    </NavLink>
                </div>
            </div>

            <div className="margin"></div>
        </section>
    )
}


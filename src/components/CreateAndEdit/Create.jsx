import React, {useState} from "react";
import './Create.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire, faStar} from "@fortawesome/free-solid-svg-icons";

const Create = ({textColor, addTodo, history, editTodoData, updateTodo}) => {
    const style = {color: textColor}
    const inputStyle = {color: textColor, border: '2px solid ' + textColor}
    const [title, setTitle] = useState(editTodoData ? editTodoData.title : '')
    const [text, setText] = useState(editTodoData ? editTodoData.text : '')
    const [favorite, setFavorite] = useState(editTodoData ? editTodoData.favorite : false)
    const [urgent, setUrgent] = useState(editTodoData ? editTodoData.urgent : false)
    const [errorTitle, setErrorTitle] = useState(null)
    const [errorText, setErrorText] = useState(null)
    const onClick = (e) => {
        let todoTitle = title
        let todoText = text
        todoTitle = todoTitle.trim()
        todoText = todoText.trim()
        if (!todoTitle) {
            return setErrorTitle('Обязательное поле')
        }
        if (todoTitle.length > 50) {
            return setErrorTitle('Максимальная длина заголовка 50 символов')
        }
        setErrorTitle(null)
        if (todoText.length > 300) {
            return setErrorText('Максимальная длина описания 300 символов')
        }
        setErrorText(null)
        setTitle('')
        setText('')
        if (editTodoData && updateTodo) {
            let todo = {...editTodoData}
            todo.title = todoTitle
            todo.text = todoText
            todo.favorite = favorite
            todo.urgent = urgent
            updateTodo(todo)
        } else {
            addTodo(todoTitle, todoText, favorite, urgent)
        }

        return history.push('/all')
    }

    return (
        <section style={{...style}} className="create">

            <h2 className='create__title'>Заголовок</h2>
            <p className='create__error'>{errorTitle}</p>
            <input value={title} onChange={(event) => setTitle(event.target.value)}
                   placeholder='Введите заголовок...'
                   style={{...inputStyle}} type="text"
                   className="create__input"/>


            <h2 className="create__title">Описание</h2>
            <p className='create__error'>{errorText}</p>
            <textarea value={text}
                      placeholder='Введите описание...'
                      onChange={(event) => setText(event.target.value)}
                      style={{...inputStyle}}
                      className='create__textarea'/>
            <h2 style={{...style}} className='create__title'>Действия</h2>
            <div className="create__actions">
                <button onClick={() => setFavorite(!favorite)} style={{opacity: favorite ? 1 : 0.3, color: textColor}}
                        className='view__action'>
                    <span><FontAwesomeIcon style={{color: textColor}} icon={faStar}/></span> Избранное
                </button>
                <button onClick={() => setUrgent(!urgent)} style={{opacity: urgent ? 1 : 0.3, color: textColor}}
                        className='view__action'>
                    <span><FontAwesomeIcon style={{color: textColor}} icon={faFire}/></span> Срочное
                </button>
            </div>
            <button onClick={onClick} style={{border: '2px solid ' + textColor, backgroundColor: textColor}}
                    className='create__button'>Завершить
            </button>
            <div className="margin"></div>
        </section>
    )
}

export default Create
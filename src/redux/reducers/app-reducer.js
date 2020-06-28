export const SET_TODO = 'SET_TODO'
export const WATCH_TODO = 'WATCH_TODO'
export const IS_LOADING = 'IS_LOADING'
export const SET_UPDATE_TODO = 'SET_UPDATE_TODO'
export const GET_FAVORITE_LIST = 'GET_FAVORITE_LIST'
export const GET_URGENT_LIST = 'GET_URGENT_LIST'
export const SET_SEARCH_TODOS = 'SET_SEARCH_TODOS'
export const CHANGE_FAVORITE = 'CHANGE_FAVORITE'
export const CHANGE_URGENT = 'CHANGE_URGENT'
export const SET_TODO_LIST = 'SET_TODO_LIST'
export const SET_EDIT_TODO = 'SET_EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SET_THEME = 'SET_THEME'

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'


let initialState = {
    todos: null,
    todo: null,
    isLoading: true,
    favoriteList: null,
    urgentList: null,
    searchList: null,
    searchQuery: '',
    editTodo: null,
    theme: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todos: state.todos ? [{...action.newTodo}, ...state.todos] : [{...action.newTodo}]
            }
        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            }
        case SET_UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.updateTodo.id) {
                        todo = action.updateTodo
                    }
                    return todo
                })
            }
        case SET_EDIT_TODO:
            return {
                ...state,
                editTodo: state.todos.find(todo => action.todoId === todo.id)
            }
        case SET_TODO_LIST:
            return {
                ...state,
                todos: action.todoList.reverse(),
                favoriteList: action.todoList ? action.todoList.filter(todo => todo.favorite) : null,
                urgentList: action.todoList ? action.todoList.filter(todo => todo.urgent) : null
            }
        case WATCH_TODO:
            const todoItem = state.todos ? state.todos.find(todo => todo.id === action.todoId) : null
            return {
                ...state,
                todo: todoItem
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.bool
            }
        case GET_FAVORITE_LIST:
            return {
                ...state,
                favoriteList: state.todos ? state.todos.filter(todo => todo.favorite) : null
            }
        case GET_URGENT_LIST:
            return {
                ...state,
                urgentList: state.todos ? state.todos.filter(todo => todo.urgent) : null
            }
        case SET_SEARCH_TODOS:
            return {
                ...state,
                searchList: state.todos ? state.todos.filter(o => o.title.toLowerCase().indexOf(action.searchQuery.toLowerCase()) >= 0) : null

            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        case CHANGE_URGENT:
            let changeUrgent = state.todos.find(todo => action.payload.id === todo.id)
            changeUrgent.urgent = action.payload.bool
            return {
                ...state
            }
        case CHANGE_FAVORITE:
            let changeFavorite = state.todos.map(todo => {
                if (action.payload.id === todo.id) {
                    todo.favorite = action.payload.bool
                    return todo
                }
                return todo
            })
            return {
                ...state,
                todos: changeFavorite
            }
        default:
            return state
    }
}
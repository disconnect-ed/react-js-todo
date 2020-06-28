import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {View} from "./View";
import {changeFavorite, changeUrgent, deleteTodo, watchTodo} from "../../redux/actions/app-action";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {Loading} from "../common/Loading/Loading";
import {NoTodo} from "../common/NoTodo/NoTodo";



class ViewContainer extends React.Component {

    componentDidMount() {
        const todoId = this.props.match.params.id
        console.log(todoId)
        this.props.watchTodo(todoId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.todos !== prevProps.todos) {
            const todoId = this.props.match.params.id
            this.props.watchTodo(todoId)
        }
    }

    render() {

        if (this.props.isLoading) {
            return <Loading/>
        }

        if (!this.props.todo) {
            return <NoTodo title='Дело не найдено' textColor={this.props.textColor}/>
        }

        return (
            <View changeUrgent={this.props.changeUrgent}
                  changeFavorite={this.props.changeFavorite}
                  starReg={faStar}
                  textColor={this.props.textColor}
                  todo={this.props.todo}
                  deleteTodo={this.props.deleteTodo}
            />
        )
    }
}

let urlDataContainer = withRouter(ViewContainer);

let mapStateToProps = (state) => {
    return {
        todo: state.app.todo,
        todos: state.app.todos,
        isLoading: state.app.isLoading,
    }
}

export default connect(mapStateToProps, {watchTodo, changeUrgent, changeFavorite, deleteTodo})(urlDataContainer)
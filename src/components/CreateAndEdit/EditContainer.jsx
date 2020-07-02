import React from "react";
import Create from "./Create";
import {connect} from "react-redux";
import {getEditTodo, updateTodo} from "../../redux/actions/app-action";
import {withRouter} from "react-router-dom";
import {Loading} from "../common/Loading/Loading";
import {NoTodo} from "../common/NoTodo/NoTodo";


class EditContainer extends React.Component {

    componentDidMount() {
        const todoId = this.props.match.params.id
        this.props.getEditTodo(todoId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.allTodosList !== prevProps.allTodosList) {
            const todoId = this.props.match.params.id
            this.props.getEditTodo(todoId)
        }
    }


    render() {

        if (this.props.isLoading) {
            return <Loading/>
        }

        if (!this.props.editTodoData) {
            return <NoTodo title='Дело не найдено' textColor={this.props.textColor} />
        }

        return (
            <Create history={this.props.history} updateTodo={this.props.updateTodo}
                    editTodoData={this.props.editTodoData} textColor={this.props.textColor}/>
        )
    }
}

let urlDataContainer = withRouter(EditContainer);

let mapStateToProps = (state) => {
    return {
        editTodoData: state.app.editTodo,
        isLoading: state.app.isLoading,
        allTodosList: state.app.allTodosList,
    }
}

export default connect(mapStateToProps, {getEditTodo, updateTodo})(urlDataContainer)
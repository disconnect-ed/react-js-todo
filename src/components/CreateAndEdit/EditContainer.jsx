import React from "react";
import Create from "./Create";
import {connect} from "react-redux";
import {getEditTodo, updateTodo} from "../../redux/actions/app-action";
import {withRouter} from "react-router-dom";


class EditContainer extends React.Component {

    componentDidMount() {
        const todoId = this.props.match.params.id
        this.props.getEditTodo(todoId)
    }


    render() {

        if (!this.props.editTodoData) {
            return <div>loading...</div>
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
    }
}

export default connect(mapStateToProps, {getEditTodo, updateTodo})(urlDataContainer)
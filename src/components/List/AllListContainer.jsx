import React from "react";
import List from "./List";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getFavoriteList} from "../../redux/actions/app-action";
import {NoTodo} from "../common/NoTodo/NoTodo";
import {Loading} from "../common/Loading/Loading";


class AllListContainer extends React.Component {

    render() {

        if (this.props.isLoading) {
            return <Loading/>
        }

        if (!this.props.todos || this.props.todos.length === 0) {
            return <NoTodo textColor={this.props.textColor}/>
        }





        return (
            <List todos={this.props.todos} textColor={this.props.textColor}/>
        )
    }
}

let urlDataContainer = withRouter(AllListContainer);

let mapStateToProps = (state) => {
    return {
        todos: state.app.todos,
        isLoading: state.app.isLoading
    }
}



export default connect(mapStateToProps, {getFavoriteList})(urlDataContainer)
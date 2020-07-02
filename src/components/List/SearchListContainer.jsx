import React from "react";
import List from "./List";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getSearchTodos} from "../../redux/actions/app-action";
import {Loading} from "../common/Loading/Loading";
import {NoTodo} from "../common/NoTodo/NoTodo";


class SearchListContainer extends React.Component {

    componentDidMount() {
        if (this.props.searchQuery === '') return this.props.history.push('/all')
    }


    render() {

        if (this.props.isLoading) {
            return <Loading/>
        }

        if (!this.props.searchList || this.props.searchList.length === 0) {
            return <NoTodo textColor={this.props.textColor} title='Дело не найдено' />
        }

        return <List todos={this.props.searchList} textColor={this.props.textColor}/>
    }
}

let urlDataContainer = withRouter(SearchListContainer);

let mapStateToProps = (state) => {
    return {
        searchList: state.app.searchList,
        searchQuery: state.app.searchQuery,
    }

}

export default connect(mapStateToProps, {getSearchTodos})(urlDataContainer)
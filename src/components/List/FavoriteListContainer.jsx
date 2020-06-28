import React from "react";
import List from "./List";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getFavoriteList} from "../../redux/actions/app-action";
import {Loading} from "../common/Loading/Loading";
import {NoTodo} from "../common/NoTodo/NoTodo";


class FavoriteListContainer extends React.Component {

    componentDidMount() {
        this.props.getFavoriteList()
    }

    render() {

        if (this.props.isLoading) {
            return <Loading/>
        }

        if (!this.props.favoriteList || this.props.favoriteList.length === 0) {
            return <NoTodo textColor={this.props.textColor} />
        }

        return <List todos={this.props.favoriteList} textColor={this.props.textColor}/>

    }
}

let urlDataContainer = withRouter(FavoriteListContainer);

let mapStateToProps = (state) => {
    return {
        favoriteList: state.app.favoriteList,
        isLoading: state.app.isLoading,
    }
}

export default connect(mapStateToProps, {getFavoriteList})(urlDataContainer)
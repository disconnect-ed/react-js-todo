import React from "react";
import List from "./List";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getUrgentList} from "../../redux/actions/app-action";
import {Loading} from "../common/Loading/Loading";
import {NoTodo} from "../common/NoTodo/NoTodo";


class UrgentListContainer extends React.Component {

    componentDidMount() {
        this.props.getUrgentList()
    }

    render() {

        if (this.props.isLoading ) {
            return <Loading/>
        }

        if (!this.props.urgentList || this.props.urgentList.length === 0) {
            return <NoTodo textColor={this.props.textColor} />
        }

        return <List todos={this.props.urgentList} textColor={this.props.textColor}/>
    }
}

let urlDataContainer = withRouter(UrgentListContainer);

let mapStateToProps = (state) => {
    return {
        urgentList: state.app.urgentList,
        isLoading: state.app.isLoading,
    }
}

export default connect(mapStateToProps, {getUrgentList})(urlDataContainer)
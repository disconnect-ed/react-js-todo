import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getSearchQuery, getSearchTodos} from "../../redux/actions/app-action";
import {getDate} from "../utils/methods";

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            searchQuery: ''
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({date: getDate()})
        }, 1000)
    }

    searchTodo(value) {
        this.props.getSearchQuery(value)
        let searchQuery = value
        searchQuery = searchQuery.trim()
        if (searchQuery) {
            this.props.history.push('/search')
            this.props.getSearchTodos(value)
        } else {
            this.props.history.push('/all')
        }
    }

    // getDate() {
    //     const date = new Date()
    //     const day = date.getDate()
    //     const month = date.getMonth()
    //     const year = date.getFullYear()
    //     const hours = date.getHours()
    //     const minuts = date.getMinutes()
    //     const seconds = date.getSeconds()
    //     const fullDate = `${day}.${month}.${year} ${hours}:${minuts}:${seconds}`
    //     this.setState({date: fullDate})
    //     return
    // }

    render() {
        return (
            <Navbar searchTodo={(value) => this.searchTodo(value)} searchQuery={this.props.searchQuery}
                    menu={this.props.menu}
                    activeClass={this.props.activeClass}
                    textColor={this.props.textColor}
                    showMenu={this.props.showMenu}
                    date={this.state.date}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        searchQuery: state.app.searchQuery,
    }
}

let urlDataContainer = withRouter(NavbarContainer);

export default connect(mapStateToProps, {getSearchQuery, getSearchTodos})(urlDataContainer)
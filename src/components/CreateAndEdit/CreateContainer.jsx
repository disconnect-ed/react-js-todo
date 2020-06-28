import React from "react";
import Create from "./Create";
import {connect} from "react-redux";
import {addTodo} from "../../redux/actions/app-action";
import {withRouter} from "react-router-dom";


class CreateContainer extends React.Component {

    render() {
        return (
            <Create history={this.props.history} addTodo={this.props.addTodo} textColor={this.props.textColor}/>
        )
    }
}

let urlDataContainer = withRouter(CreateContainer);

export default connect(null, {addTodo})(urlDataContainer)
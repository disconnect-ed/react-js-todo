import React from "react";
import InfoScreen from "./InfoScreen";
import {withRouter} from "react-router-dom";
import {getTitle} from "../utils/methods";


class InfoScreenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: null};
    }

    componentDidMount() {
        const location = this.props.location.pathname
        this.setState({title: getTitle(location)})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const location = this.props.location.pathname
            this.setState({title: getTitle(location)})
        }
    }

    render() {
        return (
            <InfoScreen title={this.state.title}
                        showMenu={this.props.showMenu}
                        menu={this.props.menu}
                        color={this.props.color}
                        img={this.props.img}/>
        )
    }
}

let urlDataContainer = withRouter(InfoScreenContainer);

export default urlDataContainer
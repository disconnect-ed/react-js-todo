import React from "react";
import InfoScreen from "./InfoScreen";
import {withRouter} from "react-router-dom";


class InfoScreenContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: null};
    }

    componentDidMount() {
        this.getTitle()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.getTitle()
        }
    }

    getTitle() {
        const location = this.props.location.pathname
        if (location === '/add') return this.setState({title: 'Добавить дело'})
        if (location === '/all') return this.setState({title: 'Все дела'})
        if (location === '/favorite') return this.setState({title: 'Избранные дела'})
        if (location === '/urgent') return this.setState({title: 'Срочные дела'})
        if (location === '/search') return this.setState({title: 'Поиск дела'})
        return this.setState({title: 'Просмотр дела'})
    }

    render() {
        return (
            <InfoScreen title={this.state.title} color={this.props.color} img={this.props.img}/>
        )
    }
}

let urlDataContainer = withRouter(InfoScreenContainer);

export default urlDataContainer
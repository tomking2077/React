import React, { Component } from 'react';

class StateInAction extends Component {

    constructor() {
        super();
        console.log("Constructor is running");
        this.state = {
            text: "State In Action"
        }
        setTimeout(() => {
            this.setState({
                text: "State Changed"
            })
        }, 2000);
    }

    render() {
        return (
            <h1> {this.state.text} - {this.props.name}</h1>
        )
    }
}

export default StateInAction;
import React, { Component } from 'react';

class Headers extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>{this.props.temp}</h1>
                <h1>{this.props.isRaining}</h1>
            </div>
        );
    }
}

export default Headers;
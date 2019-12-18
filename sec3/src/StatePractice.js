import React, { Component } from 'react';

class StatePractice extends Component {

    constructor() {
        super();
        this.state = {
            value: "",
            message: "",
            imageWidth: 0
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleFocus = () => {
        this.setState({
            message: "You agree to the terms of service"
        });
    }

    handleMouseEnter() {
        this.setState({
            message: ""
        })
    }

    handleOnLoad = (event) => {

        //console.dir(event.target);

        console.log(this.imageWidth);
        console.log(event.target.width);

        this.setState({
            imageWidth: event.target.width
        });

        console.log(this.imageWidth);

        if (this.imageWidth > 100) {
            console.log("Your image is big");
        }
    }


    render() {
        return (
            <div>
                <input type="text" onFocus={this.handleFocus}></input>
                <h3 onMouseEnter={this.handleMouseEnter}> {this.state.message}</h3>
                <img onLoad={this.handleOnLoad} src="https://i.ytimg.com/vi/LRVsxe5OJVY/maxresdefault.jpg" />
            </div>
        );
    }
}

export default StatePractice;
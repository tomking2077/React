import React, { Component } from 'react';

class EventAndState extends Component {

    constructor() {
        super();
        this.state = {
            inputText: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        console.log("Test");
        this.setState({
            inputText: ""
        });
    }

    handleChange(event) {
        console.dir(event.target);
        this.setState({
            inputText: event.target.value
        });
        console.log(this.state.inputText);
    }

    handleSubmit(e) {
        console.log("Submitted");
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick}> Click Me </button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter Some Text"
                        value={this.state.inputText} />
                </form>
            </div >
        );
    }
}

export default EventAndState
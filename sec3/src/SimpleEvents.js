import React, { Component } from 'react';

class SimpleEvents extends Component {

    handleClick() {
        console.log("Test");
    }

    handleChange() {
        console.log("Change");
    }

    handleSubmit(e) {
        console.log("Submitted");
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick}> Click Me </button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter Some Text" />
                </form>
            </div >
        );
    }
}

export default SimpleEvents
import React, { Component } from 'react';

class Modal extends Component {
    constructor() {
        super();
    }

/*     componentDidMount() {
        this.timer = setInterval(() => {
            console.log("MountTimer");
        }, 500);
    } */

    componentWillUnmount() {
        console.log("Modal to be unmounted");
        //clearInterval(this.timer);
    }

    render() {
        return (
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>{this.props.cityName}</h4>
                    <p>High: {this.props.high} - Low: {this.props.low}</p>
                    <p>{this.props.weather} <img src={this.props.iconUrl} /></p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        );
    }
}

export default Modal;
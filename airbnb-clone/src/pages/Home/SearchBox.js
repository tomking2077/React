import React, { Component } from "react";
import './SearchBox.css';

class SearchBox extends Component {

    state = {
        where: "",
        checkIn: "",
        checkOut: "",
        guests: 2
    }

    changeWhere = (e) => {
        this.setState({
            where: e.target.value
        });
    }

    changeCheckIn = (e) => {
        this.setState({
            checkIn: e.target.value
        });
    }

    changeCheckOut = (e) => {
        this.setState({
            checkOut: e.target.value
        });
    }

    changeGuests = (e) => {
        this.setState({
            guests: e.target.value
        });
    }

    render() {
        return (
            <div className="home-search-box col m4">
                <h1>Book unique places to stay and things to do.</h1>

                <form className="search-box-form">
                    <div className="col m12">
                        <div className="form-label">Where</div>
                        <div className="input-field" id="where" >
                            <input className="browser-default" onChange={this.changeWhere} placeholder="anywhere" value={this.state.where} type="text" />
                        </div>
                    </div>
                </form>

                <form className="search-box-form">
                    <div className="col m6">
                        <div className="form-label">Check In</div>
                        <div className="input-field" id="check-in" >
                            <input className="browser-default" onChange={this.changeCheckIn} value={this.state.checkIn} type="date" />
                        </div>
                    </div>
                </form>

                <form className="search-box-form">
                    <div className="col m6">
                        <div className="form-label">Check Out</div>
                        <div className="input-field" id="check-out" >
                            <input className="browser-default" value={this.state.checkOut} onChange={this.changeCheckOut} type="date" />
                        </div>
                    </div>
                </form>


                <form className="search-box-form">
                    <div className="col m12">
                        <div className="form-label">Guests</div>
                        <div className="input-field" id="where" >
                            <input className="browser-default" onChange={this.changeGuests} placeholder="2" value={this.state.guests} type="number" />
                        </div>
                    </div>
                </form>

                <div className="col m12 submit-btn">
                    <div className="input-field" id="submit-btn" >
                        <input className="btn-large waves-effect waves-light red accent-2" type="submit" />
                    </div>
                </div>

            </div>
        );
    }

}

export default SearchBox;
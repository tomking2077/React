import React, { Component } from 'react';

class FormPractice extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6 offset-sm-3">

                        <form>
                            <input type="text" placeholder="Enter name" />
                            <input type="submit" value="submit" />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPractice;
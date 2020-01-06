import React, { Component } from 'react';
import Actvity from './Activity';

class Activities extends Component {

    render() {

        console.log(this.props.activities);

        const activities = this.props.activities.map((activity, i) => {
            return (
                <div key={i} className="col s2">
                    <Actvity activity={activity} />
                </div>
            );
        });

        return (
            <div className="activities">
                <h1 className="main-header-text">{this.props.header}</h1>
                {activities}
            </div>
        );
    }

}

export default Activities;
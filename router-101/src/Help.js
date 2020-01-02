import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpCustomer = () => <h1>Customer helping</h1>
const HelpHost = () => <h1>Host helping</h1>

function Help(props) {
    return (
        <div>
            <h1>Help header</h1>

            <div>
                <Link to="/help/customer">I am a customer</Link>
                <Link to="/help/host">I am a host</Link>
            </div>

            <p>Image</p>
            <Route path="/help/customer" component={HelpCustomer} />
            <Route path="/help/host" component={HelpHost} />
            <h3>Help Footer</h3>
        </div>
    );
}

//const Help = () => <h1>Help</h1>;

export default Help;
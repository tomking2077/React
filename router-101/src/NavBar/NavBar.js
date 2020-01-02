import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import './NavBar.css'

function NavBar(props) {
    console.log(props);
    return (
        <nav className="black">
            <div className="nav-wrapper">
                <Link exact to="/" className="brand-logo">AirBNB</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/host">Become a host</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="signup">Sign up</Link></li>
                    <li><Link to="login">Log Iin</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;
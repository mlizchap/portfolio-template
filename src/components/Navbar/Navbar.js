import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ul className="navbar">
                    <NavLink to="/" className="navbar__home-link">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default Navbar;
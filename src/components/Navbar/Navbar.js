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
            <ul className="navbar-component">
                <NavLink to="/" className="navbar-component__home-link">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" className="navbar-component__about-link">
                    <li className="navbar-component__about-list-item">About</li>
                </NavLink>
                <NavLink to="/portfolio">
                    <li>Portfolio</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        );
    }
}

export default Navbar;
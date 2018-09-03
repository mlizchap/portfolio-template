import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {

    render() {
        const defaultStyle = { color: '#1f4385'}
        const active = { color: '#ff96b2'}
        return (
            <ul className="navbar-component">
                <NavLink to="/portfolio-template/" exact style={defaultStyle} activeStyle={active} className="navbar-component__home-link">
                    <li className="navbar-component__home-list-item">Home</li>
                </NavLink>
                <NavLink to="/portfolio-template/about" style={defaultStyle} activeStyle={active}>
                    <li className="navbar-component__about-list-item">About</li>
                </NavLink>
                <NavLink to="/portfolio-template/portfolio" style={defaultStyle} activeStyle={active}>
                    <li className="navbar-component__portfolio-list-item">Portfolio</li>
                </NavLink>
                <NavLink to="/portfolio-template/contact" style={defaultStyle} activeStyle={active}>
                    <li className="navbar-component__contact-list-item">Contact</li>
                </NavLink>
            </ul>
        );
    }
}

export default Navbar;
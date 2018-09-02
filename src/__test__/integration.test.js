import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from '../components/App/App';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';

// components to test for when navigation:
    // ABOUT
    // HOME
    // PORTFOLIO
    // CONTACT
    // 404 error 

// HELPERS:
const urlRouteTest = (path, component) => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ path ]}>
            <App/>
        </MemoryRouter>
    );
    expect(wrapper.find(component).length).toBe(1);
}
const navbarTest = (link, component) => {
    const wrapper = mount(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    const componentLink = wrapper.find(link);
    componentLink.simulate('click', { button: 0 });
    const componentClicked = wrapper.find(component);
    expect(componentClicked.length).toBe(1);
}

// URL TESTS - go to url and page renders 
describe('when user goes to url route', () => {
    it('goes to the about page with "/about"', () => {
        urlRouteTest('/about', '.about-component');
    });
    it('goes to the portfolio page with "/portfolio"', () => {
        urlRouteTest('/portfolio', '.portfolio-component');
    });
    it('goes to the contact page with "/contact"', () => {
        urlRouteTest('/contact', '.contact-component');
    });
    it('goes to the home page with "/"', () => {
        urlRouteTest('/', '.home-component');
    });
    it('goes to error page a non-recognizable url', () => {
        urlRouteTest('/random', '.component-errorPage');
    });
})

// NAVBAR TESTS- click on navbar items and rendes to the screen
describe('when user clicks on a navbar link', () => {
    it('goes to the about page when about is clicked', () => {
        navbarTest('.navbar-component__about-list-item', '.about-component');
    })
})

// portfolio test
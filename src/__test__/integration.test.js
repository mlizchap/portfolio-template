import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from '../components/App/App';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/Portfolio/Portfolio';
import Portfolio from '../components/Portfolio/Portfolio';

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
    it('goes to the about page when its link is clicked', () => {
        navbarTest('.navbar-component__about-list-item', '.about-component');
    })
    it('goes to the home page when its link is clicked', () => {
        navbarTest('.navbar-component__home-list-item', '.home-component');
    })
    it('goes to the portfolio page when its link is clicked', () => {
        navbarTest('.navbar-component__portfolio-list-item', '.portfolio-component');
    })
    it('goes to the contact page when its link is clicked', () => {
        navbarTest('.navbar-component__contact-list-item', '.contact-component');
    })
})

// portfolio test
it('renders a list of portfolios', () => {
    const projects = ['one', 'two', 'three'];
    const wrapper = mount(
        <MemoryRouter initialEntries={[ './portfolio' ]}>
            <Portfolio projects={projects}/>
        </MemoryRouter>
    );
   const projectRenders = wrapper.find('.portfolio-component__projects__project-block');
    expect(projectRenders.length).toBe(3);
});
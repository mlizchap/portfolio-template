import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import ErrorPage from '../ErrorPage/ErrorPage';
import '../../global.scss';
import './App.scss';

const projects = ['project 1', 'project 2', 'project 3']

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app-component">
                <Route path="/portfolio-template" component={Navbar} />   
                <Switch>
                    <Route path="/portfolio-template/about" component={About} />
                    <Route path="/portfolio-template/portfolio" render={() => (
                        <Portfolio projects={projects} />
                    )} />
                    <Route path="/portfolio-template/contact" component={Contact} />
                    <Route exact path="/portfolio-template" component={Home} />
                    <Route path="/portfolio-template" render={() => <ErrorPage />} />
                </Switch>
            </div>
        );
    }
}

export default App;
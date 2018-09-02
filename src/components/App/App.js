import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="app">
                <Router>
                    <div>
                        <Route path="/" component={Navbar} />   
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/portfolio" render={() => (
                                <Portfolio />
                            )} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/:name?/" component={Home} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
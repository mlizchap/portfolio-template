import React, { Component } from 'react';

import './Portfolio.scss';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="portfolio-component">
                <h1>PROJECTS</h1>
                <div className="portfolio-component__projects">
                    {this.props.projects.map((i, ind) => {
                        return <div className="portfolio-component__projects__project-block" key={ind}>{i}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;
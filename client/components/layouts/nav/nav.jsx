import React, { Component } from 'react';

export default class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand topnav" href="#">Josh Johnston</a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }

}

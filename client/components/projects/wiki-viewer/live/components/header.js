import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue">
            <a href="#!" className="brand-logo center">Wikipedia Viewer</a>
          </div>
        </nav>

        <div id="notification" className="orange center"></div>
      </header>
    );
  }
}

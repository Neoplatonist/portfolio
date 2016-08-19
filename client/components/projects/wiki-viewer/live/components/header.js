import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header id="wiki-navbar-fixed" className="navbar-fixed">
        <nav id="wiki-nav">
          <div id="wiki-nav-wrapper" className="nav-wrapper teal lighten-2">
            <a id="wiki-brand-logo" href="#!" className="brand-logo center">Wikipedia Viewer</a>
            <ul id="nav-mobile" class="left">
              <li id="wiki-back"><Link to="/projects/wiki-viewer">Go Back</Link></li>
            </ul>
          </div>
        </nav>

        <div id="notification" className="orange center"></div>
      </header>
    );
  }
}

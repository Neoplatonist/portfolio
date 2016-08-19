import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import './styles.scss';

export default class Nav extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $( document ).ready(function(){
      $('.button-collapse').sideNav();
      $('#sidenav-overlay').remove();
    });
  }

  render() {
    return (
      <nav className="blue">
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

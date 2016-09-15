import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    console.log(location.pathname);
  }

  render() {
    return (
      <nav id="main-nav">
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons black-text">menu</i></a>
        <div className="nav-wrapper container">
          <div className="row center-nav">
            <ul className="hide-on-med-and-down">
              <li><Link to="/projects" className="left-align blue-grey-text text-lighten-2">Projects</Link></li>
              <li><Link to="/blog" className="left-align blue-grey-text text-lighten-2">Thoughts</Link></li>
              <li className="logo"><Link to="/"><img src="/static/images/JoshuaPortrait.svg" alt="Josh's Portrait"/></Link></li>
              <li><Link to="/resume" className="right-align blue-grey-text text-lighten-2">Resume</Link></li>
              <li><Link to="/contact" className="right-align blue-grey-text text-lighten-2">Contact</Link></li>
            </ul>
          </div>

          <Link to="/" className="mobile-logo hide-on-large-only"><img src="/static/images/JoshuaPortrait.svg" alt="Josh's Portrait"/></Link>

          <ul className="side-nav" id="mobile-demo">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        /> */}
      </nav>
    );
  }
}

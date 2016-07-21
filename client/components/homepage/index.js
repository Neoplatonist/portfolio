import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import './styles';

export default class Homepage extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  menuDrop() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  }

  render() {
    return (
      <div className="main">
        <Helmet
          title='Home page'
          meta={[
            {
              property: 'og:title',
              content: 'Golang Isomorphic React/Hot Reloadable/Redux/Css-Modules Starter Kit'
            }
          ]} />

          {/* Dropdown Structure */}
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#">one</a></li>
            <li><a href="#">two</a></li>
            <li className="divider"></li>
            <li><a href="#">three</a></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <div className="container">
                <a href="#" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  {/* Dropdown Trigger */}
                  <li><a className="dropdown-button" href="#" data-activates="dropdown1" onClick={this.menuDrop}>Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
              </div>
            </div>
          </nav>

        <h1>
          Hot Reloadable <br />
          Golang + React + Redux + Css-Modules
          <br />Isomorphic Starter Kit</h1>
        <br />
        <p>
          Please take a look at <Link to='/docs'>usage</Link> page.
          Please take a look at <Link to='/about'>about</Link> page.
        </p>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Nav from '../layouts/nav/index';
import './styles.scss';

export default class Homepage extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return (
      <div id="body">
        <Helmet
          title='Home page'
          meta={[
            {
              property: 'og:title',
              content: 'Golang Isomorphic React/Hot Reloadable/Redux/Css-Modules Starter Kit'
            }
          ]}
        />

        <Nav />

        <div className="container">
          {/* <h1>
            Hot Reloadable <br />
            Golang + React + Redux + Css-Modules
            <br />Isomorphic Starter Kit</h1>
          <br />
          <p>
            Please take a look at <Link to='/docs'>usage</Link> page.
            Please take a look at <Link to='/about'>about</Link> page.
          </p>

          <button className="waves-effect waves-light orange btn">Button</button> */}

          <div className="main-card">
            <div className="c-title">
              <h1 className="grey-text text-lighten-4">Welcome To My Adventure</h1>
            </div>
            <div className="c-content">
              <h3 className="grey-text text-lighten-3">My name is Josh Johnston.</h3>
              <h3 className="grey-text text-lighten-3">I'm a developer.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

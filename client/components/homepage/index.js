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
          <h1>
            Hot Reloadable <br />
            Golang + React + Redux + Css-Modules
            <br />Isomorphic Starter Kit</h1>
          <br />
          <p>
            Please take a look at <Link to='/docs'>usage</Link> page.
            Please take a look at <Link to='/about'>about</Link> page.
          </p>

          <button className="waves-effect waves-light orange btn">Button</button>

        </div>
      </div>
    );
  }
}

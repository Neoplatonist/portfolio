import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import QuoteGeneratorLive from './live/index';
import Nav from '../../layouts/nav/index';
import './styles.scss';

export default class QuoteGenerator extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />

        <div className="container">
          <h2 className="flow-text">Quote Generator Description</h2>
          <Link to='/projects/quote-generator/live'>Live</Link>
        </div>
      </div>
    );
  }
}

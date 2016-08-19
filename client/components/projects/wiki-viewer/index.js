import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import WikiViewerLive from './live/index';
import Nav from '../../layouts/nav/index';
import './styles.scss';

export default class WikiViewer extends Component {
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
          <h2>Wiki Viewer Description</h2>
          <Link to='/projects/wiki-viewer/live'>Live</Link>
        </div>
      </div>
    );
  }
}

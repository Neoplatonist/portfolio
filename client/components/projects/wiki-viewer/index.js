import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import './styles';

export default class WikiViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>Wiki Viewer Description</h2>
        <Link to='/projects/wiki-viewer/live'>Live</Link>
      </div>
    );
  }
}

import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import './styles';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>Project List</h2>
        <Link to='/projects/wiki-viewer'>Wiki Viewer</Link>
      </div>
    );
  }
}

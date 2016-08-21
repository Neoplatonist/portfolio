import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import Nav from '../layouts/nav/index';
import './styles';

export default class NotFound extends Component {

  render() {
    return (
      <div>
        <Helmet title='404 Page Not Found' />
        <Nav />
        <div className="container">
          <h2>404 Page Not Found</h2>
          <IndexLink to='/'>go home</IndexLink>
        </div>
      </div>
    );
  }
}

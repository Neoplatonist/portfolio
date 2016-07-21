import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { about } from './styles';
import { example, p, link } from '../homepage/styles';
import { setConfig } from '../../actions';

class About extends Component {

  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return (
      <div className={about}>
        <Helmet title='About' />
        <h2 className={example}>About:</h2>
        <div className={p}>
            <p>This is a test about page to see how easy it is to work with React</p>
        </div>
        <br />
        go <IndexLink to='/' className={link}>home</IndexLink>
      </div>
    );
  }

}

export default connect(store => ({ config: store.config }))(About);

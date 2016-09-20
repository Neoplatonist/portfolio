import React, { Component } from 'react';
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

  render() {
    return (
      <footer id="footer">
        <div className="row container">
          <div className="col s12 m6">
            Icons
          </div>
          <div className="col s12 m6 right-align">
            Josh F. Johnston &copy; 2016
          </div>
        </div>
      </footer>
    );
  }
}

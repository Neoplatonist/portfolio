import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import Nav from '../layouts/nav/index';
import './styles';

export default class Projects extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  constructor(props) {
    super(props);
  }

  ovly1Enter() {
    $(".ovly1").removeClass("hide");
  }

  ovly1Leave() {
    $(".ovly1").addClass("hide");
  }

  ovly2Enter() {
    $(".ovly2").removeClass("hide");
  }

  ovly2Leave() {
    $(".ovly2").addClass("hide");
  }

  render() {
    return (
      <div>
        <Helmet

        />

        <Nav />

        <div className="container">
          <div className="row">
            <div className="col s12">
              <h2 className="center-align">Project List</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex-container">
            <Link to="/projects/wiki-viewer">
              <div className="col s12 m6 l3">
                <div className="card"
                  onMouseEnter={this.ovly1Enter}
                  onMouseLeave={this.ovly1Leave}>

                  <div className="overlay ovly1 hide">
                    <h5>Wikipedia Viewer</h5>
                    <ul>
                      <li className="chip">Javascript</li>
                      <li className="chip">ReactJS</li>
                      <li className="chip">NodeJS</li>
                    </ul>
                  </div>

                  <img src="/static/images/wiki-viewer-3.jpg" alt="wiki viewer app screenshot" />

                </div>
              </div>
            </Link>

            <Link to="/projects/quote-generator">
              <div className="col s12 m6 l3">
                <div className="card"
                  onMouseEnter={this.ovly2Enter}
                  onMouseLeave={this.ovly2Leave}>

                  <div className="overlay ovly2 hide">
                    <h5>Quote Generator</h5>
                    <ul>
                      <li className="chip">HTML5</li>
                      <li className="chip">CSS3</li>
                      <li className="chip">Javascript</li>
                    </ul>
                  </div>

                  <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

                </div>
              </div>
            </Link>

            <Link to="/projects/">
            <div className="col s12 m6 l3">
              <div className="card">

                <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

              </div>
            </div>
            </Link>

            <Link to="/projects/">
            <div className="col s12 m6 l3">
              <div className="card">

                <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

              </div>
            </div>
            </Link>

            <Link to="/projects/">
            <div className="col s12 m6 l3">
              <div className="card">

                <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

              </div>
            </div>
            </Link>

            <Link to="/projects/">
            <div className="col s12 m6 l3">
              <div className="card">

                <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

              </div>
            </div>
            </Link>

            <Link to="/projects/">
            <div className="col s12 m6 l3">
              <div className="card">

                <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

              </div>
            </div>
            </Link>

            <Link to="/projects/">
            <div className="col s12 m6 l3">
              <div className="card">

                <img src="http://placehold.it/300x300" alt="wiki viewer app screenshot" />

              </div>
            </div>
            </Link>


          </div>
        </div>
      </div>
    );
  }
}

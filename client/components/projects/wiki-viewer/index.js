import React, { Component } from 'react';
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

        <div className="project-header blue-grey lighten-2">
          <h2 className="center-align blue-grey-text darken-4">Wiki Viewer</h2>
          <h4 className="center-align blue-grey-text darken-4">Description</h4>
        </div>

        <div className="container info row">
          <div className="description col s7 white">
            <h4 className="center-align">Free Code Camp's -  Wikipedia Viewer Project</h4>

            <p><Link target="_blank" to="https://www.freecodecamp.com">Free Code Camp</Link> provided me with a foundation, teaching me Javascript from the ground up. This is one of their intermediate challenges that I decided to try to construct with ReactJS. The projects requirements are:</p>

            <ul className="browser-default">
              <li className="browser-default">User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</li>
              <li className="browser-default">User Story: I can click a button to see a random Wikipedia entry.</li>
            </ul>

            <p>This was my first project that I used an API. After some research I found it to be easier than had I expected. Since this was my first, I attempted keep my project simple and clean. I also gave this project a reactive search bar with a preset autofocus so the user never has to do anything but type.</p>

            <p>I attached an event listener, on change, to the user input, search. The value picked up from the search is then queried against Wikipedia's api. The results are returned back using the state, list. A function takes the state, list, and parses it's url, title, and description. Using ReactJS's state allows me to give the web app continuous reactivity. Thus giving the user almost intant feedback.</p>
          </div>

          <div className="extra-info col s5 l5">
            {/* <div className="my-slider">
              <ul>
                <li><img src="/static/images/wiki-viewer-1.png" /></li>
                <li><img src="/static/images/wiki-viewer-2.png" /></li>
                <li><img src="/static/images/wiki-viewer-3.png" /></li>
              </ul>
            </div> */}
            <div className="preview blue-grey">
            will add an image slider

              {/* <div className="carousel" data-indicators="true">
                <a className="carousel-item" href="#one!"><img src="/static/images/wiki-viewer-1.png" /></a>
                <a className="carousel-item" href="#two!"><img src="/static/images/wiki-viewer-2.png" /></a>
                <a className="carousel-item" href="#three!"><img src="/static/images/wiki-viewer-3.png" /></a>
              </div> */}
              {/* <img className="col s12 m4" src="/static/images/wiki-viewer-1.png" alt=""/>
              <img className="col s12 m4" src="/static/images/wiki-viewer-2.png" alt=""/>
              <img className="col s12 m4" src="/static/images/wiki-viewer-3.png" alt=""/>
              Will create an image slider and change color! */}
            </div>

            <div className="specs">
              <h5>Specs:</h5>

              <p>Will add specs</p>

              <div className="center-align">
                <Link className="blue-text spec-link" to="https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer">FreeCodeCamp</Link>
                <Link className="blue-text spec-link" to="">CodePen</Link>
                <Link className="blue-text spec-link" to="">Github</Link>
                <Link className="blue-text spec-link" to='/projects/wiki-viewer/live'>Live</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

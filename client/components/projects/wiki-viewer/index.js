import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import WikiViewerLive from './live/index';
import Nav from '../../layouts/nav/index';
import Footer from '../../layouts/footer/index';
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
      <div id="wrapper">
        <Helmet
          title='Josh F. Johnston | Wiki Viewer'
          meta={[
            {
              property: 'og:title',
              content: 'Josh F. Johnston | Wiki Viewer'
            }
          ]}
        />

        <Nav />

        <div className="project-header container">
          <h3 className="center-align">Wiki Viewer</h3>
          <h5 className="center-align">Allows the user to reactively search the first 10 results of Wikipedia.</h5>
          <ul>
            <span>Specs: </span>
            <li className="chip">Javascript</li>
            <li className="chip">ReactJS</li>
            <li className="chip">NodeJS</li>
          </ul>
        </div>

        {/* <div className="container row">
          <div className="description col s12">
            <h4 className="center-align">Free Code Camp's -  Wikipedia Viewer Project</h4>

            <p><Link target="_blank" to="https://www.freecodecamp.com">Free Code Camp</Link> provided me with a foundation, teaching me Javascript from the ground up. This is one of their intermediate challenges that I decided to try to construct with ReactJS. The projects requirements are:</p>

            <ul className="browser-default">
              <li className="browser-default">User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</li>
              <li className="browser-default">User Story: I can click a button to see a random Wikipedia entry.</li>
            </ul>

            <p>This was my first project that I used an API. After some research I found it to be easier than had I expected. Since this was my first, I attempted keep my project simple and clean. I also gave this project a reactive search bar with a preset autofocus so the user never has to do anything but type.</p>

            <p>I attached an event listener, on change, to the user input, search. The value picked up from the search is then queried against Wikipedia's api. The results are returned back using the state, list. A function takes the state, list, and parses it's url, title, and description. Using ReactJS's state allows me to give the web app continuous reactivity. Thus giving the user almost intant feedback.</p>
          </div>
        </div> */}

        <div className="container info row">
          <div className="description col s12">
            <h4 className="center-align">Free Code Camp's -  Wikipedia Viewer Project</h4>

            <p><Link target="_blank" to="https://www.freecodecamp.com">Free Code Camp</Link> provided me with a foundation, teaching me Javascript from the ground up. This is one of their intermediate challenges that I decided to try to construct with ReactJS. The projects requirements are:</p>

            <ul className="browser-default">
              <li className="browser-default">User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</li>
              <li className="browser-default">User Story: I can click a button to see a random Wikipedia entry.</li>
            </ul>

            <p>This was my first project that I used an API. After some research I found it to be easier than had I expected. Since this was my first, I attempted keep my project simple and clean. I also gave this project a reactive search bar with a preset autofocus so the user never has to do anything but type.</p>

            <p>I attached an event listener, on change, to the user input, search. The value picked up from the search is then queried against Wikipedia's api. The results are returned back using the state, list. A function takes the state, list, and parses it's url, title, and description. Using ReactJS's state allows me to give the web app continuous reactivity. Thus giving the user almost intant feedback.</p>

            <h5>Links:</h5>

            <ul className="center-align info-links">
              <li><Link className="white-text orange waves-effect waves-light btn" to='/projects/wiki-viewer/live'>Live Preview</Link></li>
              <li><Link className="white-text orange waves-effect waves-light btn" target="_blank" to="https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer">FreeCodeCamp</Link></li>
              <li><Link className="white-text orange waves-effect waves-light btn" target="_blank" to="http://codepen.io/Neoplatonist/pen/RRoMey">CodePen Preview</Link></li>
              <li><Link className="white-text orange waves-effect waves-light btn" target="_blank" to="https://github.com/Neoplatonist/FCC-react-wiki-viewer">Github Project</Link></li>
            </ul>
          </div>
        </div>

        <div className="row wiki-pic-1">
          <div className="wiki-pic-1 container">
            <div className="col m12 hide-on-large-only">
              <h6>The UI/UX draws the user to start typing in the search box. Also the cursor is already focused on the search field so all the user has to do is start typing.</h6>
            </div>
            <div className="col m12 l7">
              <img src="/static/images/wiki-viewer-1.png" alt=""/>
            </div>
            <div className="col l5 hide-on-med-and-down">
              <h6>The UI/UX draws the user to start typing in the search box. Also the cursor is already focused on the search field so all the user has to do is start typing.</h6>
            </div>
          </div>
        </div>

        <div className="row wiki-pic-2">
          <div className="wiki-pic-1 container">
            <div className="col m12 l5">
              <h6>As the user starts typing the web app automatically starts quering Wikipedia and displaying the search results.</h6>
            </div>
            <div className="col m12 l7">
              <img src="/static/images/wiki-viewer-2.png" alt=""/>
            </div>
          </div>
        </div>

        <div className="row wiki-pic-3">
          <div className="wiki-pic-1 container">
            <div className="col m12 l5 hide-on-large-only">
              <h6>When the user is finished they can scroll through the top 10 results. As they hover over the selection it grows to make their selection more visible.</h6>
            </div>
            <div className="col m12 l7">
              <img src="/static/images/wiki-viewer-3.png" alt=""/>
            </div>
            <div className="col m12 l5 hide-on-med-and-down">
              <h6>When the user is finished they can scroll through the top 10 results. As they hover over the selection it grows to make their selection more visible.</h6>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

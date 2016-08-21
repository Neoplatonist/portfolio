import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import './styles.scss';

export default class QuoteGeneratorLive extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  constructor(props) {
    super(props);

    // binds context of this to the function calls
    this.newQuote = this.newQuote.bind(this);
    this.sendTweet = this.sendTweet.bind(this);

    // sets initial state
    this.state = {
      quote: '',
      author: '',
      notification: '',
    };
  }

  componentWillMount() {
    $('#main-nav').css('display', 'none');
    this.getQuote(); // Initiates first quote
  }

  componentWillUnmount() {
    $('#main-nav').css('display', 'block');
  }


  // Calls quotes from API
  getQuote() {
    var xhr = new XMLHttpRequest();
    var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
    var data = {};

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        this.setState({quote: data.quote}); // stores quote into state
        this.setState({author: '- ' + data.author}); // stores author into state
        $('#quote').fadeIn();
        $('#author').fadeIn();
      }
    };

    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-Mashape-Key', 'RWDGX6A9NOmshtysnIctYO1avh2Sp1hv1myjsnMzSJasRoR2A8');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
  }

  // Gets new quote from API
  newQuote() {
    document.getElementById('notification').innerHTML = '';
    $('#quote').fadeOut();
    $('#author').fadeOut();
    this.getQuote();
  }

  // Sends quote and author to Twitter's post API
  sendTweet() {
    var tweet = this.state.quote + ' ' + this.state.author;
    if (tweet.length < 140) {
      var tweetURL = 'http://twitter.com/home?status=' + encodeURIComponent(tweet);
      window.open(tweetURL,'_blank');
    } else {
      this.setState({notification: 'Tweet has to be less than 140 characters.'});
    }
  }

  render() {
    return (
      <div id="qg-body">
        <header>
          <div id="qg-navbar-fixed" className="navbar-fixed">
            <nav id="qg-nav">
              <div id="qg-nav-wrapper" className="nav-wrapper purple">
                <a id="qg-brand-logo"href="#!" className="brand-logo center">Quote Generator</a>
                <ul id="nav-mobile" className="left">
                  <li id="qg-back"><Link to="/projects/quote-generator">Go Back</Link></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Notifies user if quote is too large for Twitter */}
          <div id="notification" className="orange center">{ this.state.notification }</div>
        </header>

        <main>
          <div className="container">
            <div className="row valign">
              <div className="col s6 offset-s3">
                <div className="card">
                  <div className="card-content">
                    {/* Displays quote and author */}
                    <h5 id="quote" className="">{ this.state.quote }</h5>
                    <p id="author" className="right">{ this.state.author }</p>
                  </div>
                  <div className="card-action center">
                    <div className="row">
                      <div className="col m6 s12">
                        {/* Gets new quote */}
                        <a id="newQuote" className="btn purple left" href="#" onClick={this.newQuote}>New Quote</a>
                      </div>
                      <div className="col m6 s12">
                        {/* Attempts to tweet the current quote */}
                        <a id="tweet" className="btn purple right" href="#" onClick={this.sendTweet}>Tweet It</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer id="qg-footer">
          <p>
            Created By: <Link to="http://joshfjohnston.com">Josh Johnston</Link> for <Link target="_blank" to="https://www.freecodecamp.com">FCC</Link> - <Link target="_blank" to="https://www.freecodecamp.com/challenges/build-a-random-quote-machine">Challenge</Link>
          </p>
        </footer>
      </div>
    );
  }
}

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

    this.getQuote = this.getQuote.bind(this);
    this.newQuote = this.newQuote.bind(this);
    this.sendTweet = this.sendTweet.bind(this);

    this.state = {
      quote: '',
      author: '',
      notification: '',
    };
  }

  componentWillMount() {
    $('#main-nav').css('display', 'none');
    this.getQuote();
  }

  componentWillUnmount() {
    $('#main-nav').css('display', 'block');
  }

  getQuote() {
    var xhr = new XMLHttpRequest();
    var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
    var data = {};

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        // document.getElementById('quote').innerHTML = data.quote;
        // document.getElementById('author').innerHTML = '- ' + data.author;
        this.setState({quote: data.quote});
        this.setState({author: '- ' + data.author});
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

  newQuote() {
    document.getElementById('notification').innerHTML = '';
    $('#quote').fadeOut();
    $('#author').fadeOut();
    this.getQuote();
  }

  sendTweet() {
    var tweet = this.state.quote + ' ' + this.state.author;
    if (tweet.length < 140) {
      var tweetURL = 'http://twitter.com/home?status=' + encodeURIComponent(tweet);
      window.open(tweetURL,'_blank');
    } else {
      // document.getElementById('notification').innerHTML = 'Tweet has to be less than 140 characters.';
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
                <ul id="nav-mobile" class="left">
                  <li id="qg-back"><Link to="/projects/quote-generator">Go Back</Link></li>
                </ul>
              </div>
            </nav>
          </div>

          <div id="notification" className="orange center">{ this.state.notification }</div>
        </header>

        <main>
          <div className="container">
            <div className="row valign">
              <div className="col s6 offset-s3">
                <div className="card">
                  <div className="card-content">
                    <h5 id="quote" className="">{ this.state.quote }</h5>
                    <p id="author" className="right">{ this.state.author }</p>
                  </div>
                  <div className="card-action center">
                    <div className="row">
                      <div className="col m6 s12">
                        <a id="newQuote" className="btn purple left" href="#" onClick={this.newQuote}>New Quote</a>
                      </div>
                      <div className="col m6 s12">
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

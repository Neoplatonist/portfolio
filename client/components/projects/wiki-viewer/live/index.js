import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Helmet from 'react-helmet';
import Header from './components/header';
import Footer from './components/footer';
import './styles';

export default class WikiViewerLive extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      list: {},
    }
  }

  componentWillMount() {
    document.body.style.backgroundColor = "#e0f2f1";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "#cfd8dc";
  }

  handleChange(event) {
    var query = event.target.value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      query + "&limit=10&namespace=0&format=json";

    $.ajax({
      url: url,
      method: "GET",
      dataType: "jsonp",
      headers: { "Api-User-Agent": "WikiViewer/1.0" },
      success: function(data) {
        this.setState({list: data});
      }.bind(this)
    });
  }

  searchList(list) {
    if (list.length > 0) {
      return list[3].map((v, k) => {
        return (
          <div className="row" key={'searchList-' + k}>
            <div id="searchList" className="col s10 offset-s1 teal lighten-3 round">
              <a target="_blank" href={v} className="black-text darken-4">
                <h4 className="center">{list[1][k]}</h4><hr />
                <p>{list[2][k]}</p>
              </a>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet
          title="Wiki Viewer"
          link={[
            {'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Ovo'}
          ]}
        />

        <Header />

        <main className="container">
          <Helmet title='Go + React + Redux = rocks!' />
          <div className="row">
            <div className="col s12 center">
              <h6 id="random"><a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random" className="light-blue-text lighten-2">Click Here for a Random Article</a></h6>
            </div>
          </div>
          <div id="search-container" className="row">
            <div className="col s6 offset-s3">
              <input id="search" type="text" onChange={this.handleChange} placeholder="Type to Search" className="black-text lighten-2"/>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              {this.searchList(this.state.list)}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

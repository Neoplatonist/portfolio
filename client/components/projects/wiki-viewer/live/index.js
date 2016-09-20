import React, { Component } from 'react';
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

    // binds context of this to the function calls
    this.handleChange = this.handleChange.bind(this);

    // sets initial state
    this.state = {
      list: {},
    };
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#e0f2f1';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = '#fafafa';
  }

  // Sends query to Wikipedia through their API
  handleChange(event) {
    var query = event.target.value;
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +
      query + '&limit=10&namespace=0&format=json';

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'jsonp',
      headers: { 'Api-User-Agent': 'WikiViewer/1.0' },
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
          title='Josh F. Johnston | Wiki Viewer Live'
          meta={[
            {
              property: 'og:title',
              content: 'Josh F. Johnston | Wikipedia Viewer Live'
            }
          ]}
          link={[
            {'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Ovo'}
          ]}
        />

        <Header />

        <main className="container">
          <div className="row">
            <div className="col s12 center">
              {/* Sends to random Wikipedia article */}
              <h6 id="random"><a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random" className="light-blue-text lighten-2">Click Here for a Random Article</a></h6>
            </div>
          </div>
          <div id="search-container" className="row">
            <div className="col s6 offset-s3">
              {/* Notices changes to input the queries Wikipedia API */}
              <input id="search" className="black-text lighten-2" type="text" onChange={this.handleChange} placeholder="Type to Search" autoFocus />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              {/* Output of queried results */}
              {this.searchList(this.state.list)}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

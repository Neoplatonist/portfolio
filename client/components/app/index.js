import React, { Component } from 'react';
import Helmet from 'react-helmet';

 // Component Imports
// import Nav from '../layouts/nav/nav.jsx';
// import Footer from '../layouts/footer';

export default class App extends Component {

  render() {
    return (
      <div>
        <Helmet title='Go + React + Redux = rocks!' />
        {/*<Nav />*/}
        {this.props.children}
      </div>
    );
  }

}

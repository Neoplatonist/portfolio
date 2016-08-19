import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="teal lighten-2">
        <p>
          Created By: <a target="_blank" href="http://joshfjohnston.com">Josh Johnston</a> for <a target="_blank" href="https://www.freecodecamp.com">FCC</a> - <a target="_blank" href="https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer">Challenge</a>
        </p>
      </footer>
    );
  }
}

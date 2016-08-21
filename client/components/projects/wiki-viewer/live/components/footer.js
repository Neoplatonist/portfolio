import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="wiki-footer" className="teal lighten-2">
        <p>
          Created By: <Link to="http://joshfjohnston.com">Josh Johnston</Link> for <Link target="_blank" to="https://www.freecodecamp.com">FCC</Link> - <Link target="_blank" to="https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer">Challenge</Link>
        </p>
      </footer>
    );
  }
}

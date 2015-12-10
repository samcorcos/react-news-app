import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './nav.jsx';
import Feed from './feed.jsx';

export default class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Feed />
      </div>
    )
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';

export default class App extends Component {
  render() {
    return(
      <div>
        <h1>app time</h1>
        <Hello />
      </div>
    )
  }
}

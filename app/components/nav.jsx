import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <div>Conflagration</div>
          <div>Login</div>
        </div>
      </nav>
    )
  }
}

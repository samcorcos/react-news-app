import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Item extends Component {
  render() {
    return (
      <li className="news-item">this is an item</li>
    )
  }
}

export default class Feed extends Component {
  render() {
    return (
      <div className="feed-container">
        <ul className="news-feed">
          <Item />
        </ul>
      </div>
    )
  }
}

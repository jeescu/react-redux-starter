import React, { Component } from 'react';
import Posts from './posts';

export default class App extends Component {
  componentWillDidMount() {
    // console.log('did mount');
  }

  render() {
    return (
      <div>React Redux Starter

        <Posts />
      </div>
    );
  }
}

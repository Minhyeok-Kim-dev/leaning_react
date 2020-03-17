import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chapter6 from './chapter6/Chapter6'
import Chapter7 from './chapter7/Chapter7'


class Test extends Component {
  render() {
    return (
      <h1>야호</h1>
    )
  }
}

class App extends Component {
  render() {
    return(
      //<Chapter6 />
      <Chapter7 />
    )
  } 
}

export default App;

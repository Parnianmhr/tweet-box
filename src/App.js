import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './components/TweetBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tweet me!</h2>
        </div>
        <div className="tweet">
          <TweetBox />
        </div>
      </div>
    );
  }
}

export default App;

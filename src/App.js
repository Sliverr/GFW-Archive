import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import CastList from './CastList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CastList />
      </div>
    );
  }
}

export default App;

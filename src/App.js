import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        <Timeline />
        
      </div>
    );
  }
}

export default App;

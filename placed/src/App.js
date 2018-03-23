import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import containers for routing and rendering:
import PlaceSettings from './containers/PlaceSettings/PlaceSettings';

class App extends Component {
  render() {
    return (
      <PlaceSettings />
    );
  }
}

export default App;

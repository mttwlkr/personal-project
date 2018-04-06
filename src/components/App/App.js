import React, { Component } from 'react';
import './App.css';
import GameContainer from '../../containers/GameContainer/GameContainer.js';
import RiderContainer from '../../containers/RiderContainer/RiderContainer'

export class App extends Component {

  render() {
    return (
      <div className="App">
        <GameContainer />
        <RiderContainer />
      </div>
    );
  }
}

export default App
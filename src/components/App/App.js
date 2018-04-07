import React, { Component } from 'react';
import './App.css';
import GameContainer from '../../containers/GameContainer/GameContainer.js';
import RiderContainer from '../../containers/RiderContainer/RiderContainer';
import Header from '../../containers/Header/Header';
import { Route, Switch} from 'react-router-dom';

export class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        
        <Route exact path='/games' render={() => {
          return (<div>
            <GameContainer />
            <RiderContainer />
          </div>)
          }
        }></Route>
        
        <Route exact path='/riders' component={RiderContainer}></Route>
      </div>
    );
  }
}

export default App
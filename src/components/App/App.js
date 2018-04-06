import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addRidersToStore } from '../../actions';
import { addGamesToStore } from '../../actions';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      riders: [],
      games: {}
    }
  }

  async componentDidMount() {
    const games = await this.getGames();
    const riders = await this.getRiders();
    this.props.addGamesToStore(games);
    this.props.addRidersToStore(riders);
  }

  getGames = async () => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";    
      const url = "slvsh.com/posts.json?page=1&is_active=true";
      const response = await fetch(proxyurl + url)
      const games = await response.json()
      return games
    } catch (error) {
      throw await error 
    }    
  }

  getRiders = async () => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";    
      const url = "slvsh.com/riders.json";
      const response = await fetch(proxyurl + url)
      const riders = await response.json()
      return riders  
    } catch (error) {
      throw await error 
    }      
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  riders: state.riders,
  games: state.games
})

export const mapDispatchToProps = (dispatch) => ({
  addRidersToStore: (riders) => dispatch(addRidersToStore(riders)),
  addGamesToStore: (games) => dispatch(addGamesToStore(games))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
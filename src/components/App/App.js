import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      riders: [],
      games: {}
    }
  }

  componentDidMount() {
    this.getGames();
    this.getRiders();
  }

  getGames = async () => {
    try {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";    
      const url = "slvsh.com/posts.json?page=1&is_active=true";
      const response = await fetch(proxyurl + url)
      const games = await response.json()
      this.setState({ games })      
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
      this.setState({ riders })      
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

export default App;
import React from 'react';
import './App.css';
import GameContainer from '../../containers/GameContainer/GameContainer.js';
import RiderContainer from '../../containers/RiderContainer/RiderContainer';
import VideoPlayer from '../../containers/VideoPlayer/VideoPlayer.js';
import Header from '../Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import SingleRider from '../../containers/SingleRider/SingleRider.js';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={GameContainer}></Route>
      <Route exact path='/games/page/' component={GameContainer}></Route>    
      <Route exact path='/games/:game' component={VideoPlayer}></Route>
      <Route exact path='/games/page/:page' component={GameContainer}></Route>
      <Route exact path='/riders' component={RiderContainer}></Route>
      <Route exact path='/riders/:rider' component={SingleRider}></Route>
      <Footer />
    </div>
  );
};


export default withRouter(App);
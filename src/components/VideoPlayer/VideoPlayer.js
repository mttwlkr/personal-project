import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './VideoPlayer.css';
import { getSingle } from '../../fetches/get-single.js';
import { addSingleGameToStore } from '../../actions/index.js'

export class VideoPlayer extends Component {

  async componentDidMount() {
    const { location, addSingleGameToStore } = this.props
    const currentLocation = location.pathname
    const currentGame = await getSingle(currentLocation)
    addSingleGameToStore(currentGame)
  }

  render() {
    
    const { player, games } = this.props;
    
    let theGame;

    if (games.currentGame) {
      theGame = games.currentGame
    }

    if (games.posts) {
      theGame = games.posts.find( game => game.id === player[0])
    }

  return (
    <div className='main-video-player-div'>
      { !theGame && <h1>Loading</h1> }
      { theGame && 
        <div>
          <section className='video-player-editorial-title'>
            <h2>{theGame.title.replace(/&nbsp;/gi,'')}</h2>
            <p>{`${theGame.location} on ${theGame.formatted_publish_date}`}</p>
          </section>
          <div className="video-container-style-div">
            <div className="video-container">
              <iframe
                title='video-player'
                width="640" 
                height="360" 
                src={theGame.video_url}
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
            </div>
          </div> 
          <section className='video-player-editorial-body'>
            {theGame.editorial !== 'undefined' && theGame.editorial}
            {theGame.description !== 'undefined' && theGame.description}
          </section>
        </div>
      }
    </div>
  )}
}      

export const mapStateToProps = ({player, games}) => ({
  player,
  games
})

export const mapDispatchToProps = (dispatch) => ({
  addSingleGameToStore: (currentGame) => dispatch(addSingleGameToStore(currentGame)) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));

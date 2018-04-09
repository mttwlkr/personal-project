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
      <div className='video-container'>
        { !theGame && <h1>Loading</h1> }
        { theGame && 
          <div>
          <section className='video-player-div'>
            <iframe
              title='video-player'
              className='iFrame'
              width="640" 
              height="360" 
              src={theGame.video_url}
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
            <h2>{theGame.title.replace(/&nbsp;/gi,'')}</h2>
            <p>{`${theGame.location} about ${theGame.publish_date} ago`}</p>
          </section>
          <section className='video-player-editorial'>
            {theGame.description}
          </section>
          </div>
        }
      </div>
    )    
  }
}

export const mapStateToProps = ({player, games}) => ({
  player,
  games
})

export const mapDispatchToProps = (dispatch) => ({
  addSingleGameToStore: (currentGame) => dispatch(addSingleGameToStore(currentGame)) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoPlayer));

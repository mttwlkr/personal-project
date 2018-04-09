import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './VideoPlayer.css';

class VideoPlayer extends Component {

  render() {

    const { match, player, games } = this.props;
    let theGame;
    if (games.posts) {
      theGame = games.posts.find( game => game.id === player[0])
    }

    console.log(theGame)

    return (
      <div className='video-container'>
        <section className='video-player-div'>
          <iframe
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
    )    
  }
}

const mapStateToProps = ({player, games}) => ({
  player,
  games
})


export default withRouter(connect(mapStateToProps)(VideoPlayer));

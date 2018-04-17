import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './VideoPlayer.css';
import { getSingleVideo } from '../../fetches/get-single-video.js';
import { addSingleGameToStore } from '../../actions/index.js';
import PropTypes from 'prop-types';

export class VideoPlayer extends Component {

  async componentDidMount() {
    if (!this.props.games.posts) {
      const { location, addSingleGameToStore } = this.props;
      const currentLocation = location.pathname;
      const currentGame = await getSingleVideo(currentLocation);
      addSingleGameToStore(currentGame);
    }
    window.scrollTo(0, 0);
  }

  render() {
    
    const { gameForPlayer, games } = this.props;
    
    let theGame;

    if (games.currentGame) {
      theGame = games.currentGame;
    }

    if (games.posts) {
      theGame = games.posts.find( game => game.id === gameForPlayer[0]);
    }

    return (
      <div className='main-video-player-div'>
        { !theGame && 
          <div className='loading-GIF-video-player'>
            <img
              src='http://www.benettonplay.com/toys/flipbookdeluxe/flipbooks_gif/2007/08/23/28448.gif'
              alt='loading-GIF'
            />
          </div>
        }
        { theGame && 
          <div>
            <section className='video-player-editorial-title'>
              <h2>{theGame.title.replace(/&nbsp;/gi, '')}</h2>
              <p className='video-player-loc-and-date'>{`${theGame.location}
                on ${theGame.formatted_publish_date}`}</p>
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
              {theGame.editorial !== undefined && theGame.editorial}
              {theGame.description !== undefined && theGame.description}
            </section>
          </div>
        }
      </div>
    );
  }
}      

export const mapStateToProps = ({gameForPlayer, games}) => ({
  gameForPlayer,
  games
});

export const mapDispatchToProps = (dispatch) => ({
  addSingleGameToStore: (currentGame) => 
    dispatch(addSingleGameToStore(currentGame))
});

export default withRouter(connect(mapStateToProps, 
  mapDispatchToProps)(VideoPlayer));

VideoPlayer.propTypes = {
  games: PropTypes.object,
  posts: PropTypes.array,
  gameForPlayer: PropTypes.array
};

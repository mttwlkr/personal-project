import React from 'react';
import './GameCard.css';

const GameCard = ({game, handleRoute}) => {
  let gameStyling;
  let gameType;
  
  switch(game.post_class) {
    case 'slvsh':
      gameStyling = 'slvsh-style';
      gameType = 'S.L.V.S.H.'
      break;
    case 'film':
      gameStyling = 'film-style';
      gameType = 'THEATER';
      break;
    case 'instabanger':
      gameStyling = 'instabanger-style';
      gameType = 'INSTABANGER';
      break;
    default:
      gameStyling = 'slvsh-style'
      gameType = 'S.L.V.S.H.'
  }

  return (
    <div 
      className='game-container-card'
      onClick={() => handleRoute(game.id)}
    >
      <img className='game-card-image' 
        src={game.poster_img}
        alt='slvsh-video-thumbnail'
      />
      <div className='game-card-info'>
        <p className={`game-card-type ${gameStyling}`}>{gameType}</p>
        <h3 className='game-card-title'>{game.title.replace(/&nbsp;/gi,' ')}</h3>
        <p className='game-card-loc-date'>{`${game.location}, ${game.publish_date} ago`}</p>
      </div>
    </div>
  )
}


export default GameCard;

// { id
//       created_at
//       updated_at
//       video_host
//       vimeo_id
//       type
//       location
//       video_url
//       title
//       poster_img
//       post_class
//       publish_date
//       href
//       description
//       formatted_publish_date
//       tags
//       tags_string }
import React from 'react';
import './GameCard.css';

const GameCard = ({game, handleRoute}) => {
  return (
    <div 
      className='game-container-card'
      onClick={() => handleRoute(game.id)}
    >
      <img className='game-card-image' src={game.poster_img}/>
      <div className='game-card-info'>
        <p className='game-card-type'>{game.type}</p>
        <h3 className='game-card-title'>{game.title.replace(/&nbsp;/gi,'')}</h3>
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
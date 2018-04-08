import React from 'react';
import './GameCard.css';

const GameCard = ({game}) => {
  return (
    <div className='game-container-card'>
      <h3>{game.title}</h3>
      <img className='game-card-thumbnail' src={game.poster_img}/>
      <p>{game.type}</p>
      <p>{`${game.publish_date} ago`}</p>
      <p>{game.location}</p>
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
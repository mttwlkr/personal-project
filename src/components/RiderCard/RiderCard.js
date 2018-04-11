import React from 'react';
import './RiderCard.css';
import FlagIcon from '../FlagIconFactory/FlagIconFactory';

const RiderCard = ({rider}) => {
  const statKeys = Object.keys(rider).filter( key => {
    return key === "Offense" || key === "Defense" || key === "Difficulty" || key === "Overall"
  })
  const displayStats = statKeys.map( stat => {
    return <div className='rider-card-stat'>
      <span className='rider-card-stat-title'>{`${stat}`}</span>{` : ${rider[stat]}`}</div>
  })

  return (
    <div className='rider-container-card'>
      <img 
        className='rider-card-thumbnail' 
        src={rider.avatar}
        alt='slvsh-rider-thumbnail'
      />

      <h3>{rider.name}</h3>
      <FlagIcon 
        code={rider.country} 
        size={'lg'} 
      />
      
      <p>{`Sponsor: ${rider.sponsor}`}</p>
      <section className='rider-card-info'>
        {`SLVSH Games Played: ${rider.games_played || 0}`}
        {displayStats}
      </section>
    </div>
  )
}

export default RiderCard;

// age
// avatar
// birthdate
// country
// id
// name
// slvsh_avg
// sponsor
// url

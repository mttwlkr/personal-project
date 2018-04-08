import React from 'react';
import './RiderCard.css';

const RiderCard = ({rider}) => {
  const statKeys = Object.keys(rider).filter( key => {
    return key === "Offense" || key === "Defense" || key === "Lines" || key === "Difficulty" || key === "Overall"
  })
  const displayStats = statKeys.map( stat => {
    return <div>{`${stat} : ${rider[stat]}`}</div>
  })

  return (
    <div className='rider-container-card'>
      <h3>{rider.name}</h3>
      <img className='rider-card-thumbnail' src={rider.avatar}/>
      <p>{rider.country}</p>
      <p>{`Sponsor: ${rider.sponsor}`}</p>
      <section>
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

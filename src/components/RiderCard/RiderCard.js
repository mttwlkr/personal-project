import React from 'react';
import './RiderCard.css';

const RiderCard = ({rider}) => {
  return (
    <div className='rider-container-card'>
      <h3>{rider.name}</h3>
      <img className='rider-card-thumbnail' src={rider.avatar}/>
      <p>{rider.country}</p>
      <p>{rider.sponsor}</p>
      <ul>
        <li>{rider.ota || null }</li>
        <li>{rider.dta || null }</li>
        <li>{rider.lla || null }</li>
        <li>{rider.tdr || null }</li>
      </ul>
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

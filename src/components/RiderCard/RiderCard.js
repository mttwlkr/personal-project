import React from 'react';
import './RiderCard.css';
import FlagIcon from '../FlagIconFactory/FlagIconFactory';
import PropTypes from 'prop-types';

const RiderCard = ({rider, handleRider}) => {
  const statKeys = Object.keys(rider).filter( key => {
    return key === "Offense" || 
      key === "Defense" || 
      key === "Difficulty" || 
      key === "Overall";
  });

  const displayStats = statKeys.map((stat, index) => {
    return <div className='rider-card-stat' key={index}>
      <span className='rider-card-stat-title'>{`${stat}`}</span>
      {`: ${(rider[stat])
        .toLocaleString('en-IN', 
          { style: 'percent', maximumSignificantDigits: 3 })}`
      }
    </div>;
  });

  return (
    <div 
      className='rider-container-card'
      onClick={() => handleRider(rider.id)}
    >
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

      <section className='rider-card-info'>
        <h4 className='rider-card-games-played-title'>{`SLVSH Games:`}
          <span className='rider-card-games-played-value'>
            {` ${rider.games_played || 0}`}
          </span>
        </h4>
        {displayStats}
        <p className='rider-card-sponsor'>
          <span className='rider-card-sponsor-title'>{`Sponsor: `}</span>
          {`${rider.sponsor}`}
        </p>
      </section>
    </div>
  );
};

export default RiderCard;

RiderCard.propTypes = {
  rider: PropTypes.object,
  handleRider: PropTypes.func
};

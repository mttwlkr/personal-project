import React from 'react';
import './RiderCard.css';
import FlagIcon from '../FlagIconFactory/FlagIconFactory';

const RiderCard = ({rider, handleRider}) => {
  const statKeys = Object.keys(rider).filter( key => {
    return key === "Offense" || key === "Defense" || key === "Difficulty" || key === "Overall"
  })
  const displayStats = statKeys.map((stat, index) => {
    return <div className='rider-card-stat' key={index}>
        <span className='rider-card-stat-title'>{`${stat}`}</span>
        {`: ${(rider[stat]).toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}
      </div>
  })

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
          <span className='rider-card-games-played-value'>{` ${rider.games_played || 0}`}</span>
        </h4>
        {displayStats}
        <p className='rider-card-sponsor'>
          <span className='rider-card-sponsor-title'>{`Sponsor: `}</span>{`${rider.sponsor}`}
        </p>
      </section>
    </div>
  )
}

export default RiderCard;

// const getStats = () => {

//     const topOffense = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Offense - a.Offense).slice(0, 10) 
//     const topDefense = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Defense - a.Defense).slice(0, 10)
//     const topDifficulty = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Difficulty - a.Difficulty).slice(0, 10)
//     const topOverall = () => props.riders.filter(rider => rider.games_played > 1).sort((a, b) => b.Overall - a.Overall).slice(0, 10)
    
//     const stats = props.riders.reduce((statsObj, rider) => {
//       if (rider.games_played > 1) {
//         statsObj.topOffense = topOffense()
//         statsObj.topDefense = topDefense()
//         statsObj.topDifficulty = topDifficulty()
//         statsObj.topOverall = topOverall()
//       }
//       return statsObj
//     }, {})
//     return stats
//   }

import React from 'react';
import './SingleRider.css';
import { connect } from 'react-redux';
import FlagIcon from '../FlagIconFactory/FlagIconFactory';

export const SingleRider = (props) => {
  const { match, riders } = props

  let displayRider;

  if (riders.length > 0) {
    displayRider = riders.find( rider => {
      return rider.id === parseInt(match.params.rider, 10)
    })
  }

  return (
    <div>
      { 
        displayRider.id && 
        <div className='single-rider-div'>
          <img 
            src={displayRider.avatar} 
            alt={displayRider.name}
          />
          <h1>{`Name: ${displayRider.name}`}</h1>
          <FlagIcon 
            code={displayRider.country}
            size={'2x'}
          />
          <p>{`Age: ${displayRider.age}`}</p>
          <p>{`Sponsor: ${displayRider.sponsor}`}</p>
          <h2>{`${displayRider.name}'s Stats`}</h2>
          <p>{`Games Played: ${displayRider.games_played}`}</p>
          <p>{`Offense: ${displayRider.Offense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          <p>{`Defense: ${displayRider.Defense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          <p>{`Difficulty: ${displayRider.Difficulty.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          <p>{`Overall: ${displayRider.Overall.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          <h2>{`${displayRider.name}'s Games`}</h2>
        </div>
      }
    </div>
  )
}

export const mapStateToProps = ({riders}) => ({
  riders
})

// export const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps)(SingleRider)

// age
// avatar
// birthdate
// country
// id
// name
// slvsh_avg
// sponsor
// url
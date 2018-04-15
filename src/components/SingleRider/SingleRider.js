import React, { Component } from 'react';
import './SingleRider.css';
import { connect } from 'react-redux';
import FlagIcon from '../FlagIconFactory/FlagIconFactory';
import { withRouter } from 'react-router';

export class SingleRider extends Component {

  async componentDidMount() {
    const { match } = this.props
    const currentLocation = match.params.rider
    
  }

  render() {
    const { match, riders } = this.props
  
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
          
          <div className='stats-div'>
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
              <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
              <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
              <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                strokeDasharray={`${Math.floor(displayRider.Offense * 100)}, ${(100 - Math.floor(displayRider.Offense * 100))}`}
                strokeDashoffset="75"></circle>
              <g className="circle-copy">
                <text x="35%" y="60%" fontSize='6px' className="circle-number">{`${displayRider.Offense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                <text x="33%" y="45%" fontSize='4px' className="circle-label">Offense</text>
              </g>
            </svg>
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
              <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
              <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
              <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                strokeDasharray={`${Math.floor(displayRider.Defense * 100)}, ${(100 - Math.floor(displayRider.Defense * 100))}`}
                strokeDashoffset="75"></circle>
              <g className="circle-copy">
                <text x="35%" y="60%" fontSize='6px' className="circle-number">{`${displayRider.Defense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                <text x="33%" y="45%" fontSize='4px' className="circle-label">Defense</text>
              </g>
            </svg>
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
              <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
              <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
              <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                strokeDasharray={`${Math.floor(displayRider.Difficulty * 100)}, ${(100 - Math.floor(displayRider.Difficulty * 100))}`}
                strokeDashoffset="75"></circle>
              <g className="circle-copy">
                <text x="35%" y="60%" fontSize='6px' className="circle-number">{`${displayRider.Difficulty.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                <text x="33%" y="45%" fontSize='4px' className="circle-label">Difficulty</text>
              </g>
            </svg>
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
              <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
              <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
              <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                strokeDasharray={`${Math.floor(displayRider.Overall * 100)}, ${(100 - Math.floor(displayRider.Overall * 100))}`}
                strokeDashoffset="75"></circle>
              <g className="circle-copy">
                <text x="35%" y="60%" fontSize='6px' className="circle-number">{`${displayRider.Overall.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                <text x="33%" y="45%" fontSize='4px' className="circle-label">Overall</text>
              </g>
            </svg>                        
          </div>

          <h2>{`${displayRider.name}'s Games`}</h2>
        </div>
        }
    </div>
    )    
  }
}

export const mapStateToProps = ({riders}) => ({
  riders
})

// export const mapDispatchToProps = (dispatch) => ({

// })

export default withRouter(connect(mapStateToProps)(SingleRider))

// age
// avatar
// birthdate
// country
// id
// name
// slvsh_avg
// sponsor
// url


          // <p>{`Offense: ${displayRider.Offense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          // <p>{`Defense: ${displayRider.Defense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          // <p>{`Difficulty: ${displayRider.Difficulty.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>
          // <p>{`Overall: ${displayRider.Overall.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 3 })}`}</p>

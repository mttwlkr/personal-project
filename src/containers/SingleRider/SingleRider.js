import React, { Component } from 'react';
import './SingleRider.css';
import { connect } from 'react-redux';
import FlagIcon from '../../components/FlagIconFactory/FlagIconFactory';
import { withRouter } from 'react-router';
import { getSingleRider } from '../../fetches/get-single-rider';
import { addSingleRiderToStore, addStatsToSingleRider } from '../../actions/index.js';
import { riderStatsObject } from '../../stats/rider-stats-object.js'

export class SingleRider extends Component {

  async componentDidMount() {
    const { match, addSingleRiderToStore, addStatsToSingleRider } = this.props
    const currentRider = match.params.rider
    const riderObj = await getSingleRider(currentRider)
    addSingleRiderToStore(riderObj)
    addStatsToSingleRider(riderStatsObject)
  }

  render() {
    const { match, riders, singleRider } = this.props

    let displayRider = {};

    if (singleRider.id) {
      displayRider = singleRider
    }

    if (riders.length > 0) {
      displayRider = riders.find( rider => {
        return rider.id === parseInt(match.params.rider, 10)
      })
    }

  return (
    <div className='single-rider-background-div'>
      { 
        !displayRider.Offense && 
        <div className='loading-gif'>
          <img 
            src='http://www.benettonplay.com/toys/flipbookdeluxe/flipbooks_gif/2007/08/23/28448.gif' 
            alt='loading-GIF' 
          />
        </div>
      }
      { displayRider.Offense && 
        <div className='single-rider-card'>
          <img 
            src={displayRider.avatar} 
            alt={displayRider.name}
          />
          <div className='single-rider-card-info-div'>
            <h1>{`${displayRider.name}`}</h1>         
  
            <p className='single-rider-card-title srct-birthday'>{`Birthday: `}
              <span className='single-rider-card-value srcv-birthday'>{`${displayRider.birthdate}`}</span>
            </p>
  
            <p className='single-rider-card-title srct-sponsor'>{`Sponsor: `}
              <span className='single-rider-card-value srcv-sponsor'>{`${displayRider.sponsor}`}</span>
            </p>
  
            <p className='single-rider-card-title srct-games-played'>{`Games Played: `}
              <span className='single-rider-card-value srcv-games-played'>{`${displayRider.games_played}`}</span>
            </p>
  
            <FlagIcon 
              code={displayRider.country}
              size={'2x'}
            />
          </div>
          <div>

          </div>
          <div className='stats-div'>
            <div className='stats-div-upper'>
              <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
                <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
                <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                  strokeDasharray={`${Math.floor(displayRider.Offense * 100)}, ${(100 - Math.floor(displayRider.Offense * 100))}`}
                  strokeDashoffset="75"></circle>
                <g className="circle-copy">
                  <text x="32%" y="52%" fontSize='8px' className="circle-number">{`${displayRider.Offense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                  <text x="33%" y="65%" fontSize='4px' className="circle-label">Offense</text>
                </g>
              </svg>
              <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
                <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
                <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                  strokeDasharray={`${Math.floor(displayRider.Defense * 100)}, ${(100 - Math.floor(displayRider.Defense * 100))}`}
                  strokeDashoffset="75"></circle>
                <g className="circle-copy">
                  <text x="32%" y="52%" fontSize='8px' className="circle-number">{`${displayRider.Defense.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                  <text x="33%" y="65%" fontSize='4px' className="circle-label">Defense</text>
                </g>
              </svg>
            </div>
            <div className='stats-div-lower'>
              <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
                <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
                <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                  strokeDasharray={`${Math.floor(displayRider.Difficulty * 100)}, ${(100 - Math.floor(displayRider.Difficulty * 100))}`}
                  strokeDashoffset="75"></circle>
                <g className="circle-copy">
                  <text x="32%" y="52%" fontSize='8px' className="circle-number">{`${displayRider.Difficulty.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                  <text x="33%" y="65%" fontSize='4px' className="circle-label">Difficulty</text>
                </g>
              </svg>
              <svg width="100%" height="100%" viewBox="0 0 42 42" className="circle">
                <circle className="circle-inner" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                <circle className="circle-whole" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"  strokeWidth="3"></circle>
                <circle className="circle-colored" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#2c3e50"  strokeWidth="3" 
                  strokeDasharray={`${Math.floor(displayRider.Overall * 100)}, ${(100 - Math.floor(displayRider.Overall * 100))}`}
                  strokeDashoffset="75"></circle>
                <g className="circle-copy">
                  <text x="32%" y="52%" fontSize='8px' className="circle-number">{`${displayRider.Overall.toLocaleString('en-IN', { style: 'percent', maximumSignificantDigits: 2 })}`}</text>
                  <text x="33%" y="65%" fontSize='4px' className="circle-label">Overall</text>
                </g>
              </svg> 
            </div>                       
          </div>
        </div>
      }
    </div>
    )    
  }
}

export const mapStateToProps = ({riders, singleRider}) => ({
  riders,
  singleRider
})

export const mapDispatchToProps = (dispatch) => ({
  addSingleRiderToStore: (currentRider) => dispatch(addSingleRiderToStore(currentRider)),
  addStatsToSingleRider: (riderStatsObject) => dispatch(addStatsToSingleRider(riderStatsObject))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRider))

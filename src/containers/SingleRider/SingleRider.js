import React, { Component } from 'react';
import './SingleRider.css';
import { connect } from 'react-redux';
import FlagIcon from '../../components/FlagIconFactory/FlagIconFactory';
import { withRouter } from 'react-router';
import { getSingleRider } from '../../fetches/get-single-rider';
import { addSingleRiderToStore, 
  addStatsToSingleRider } from '../../actions/index.js';
import { riderStatsObject } from '../../stats/rider-stats-object.js';
import PropTypes from 'prop-types';
import { SVGDonut } from '../../components/SVGDonut/SVGDonut.js';

export class SingleRider extends Component {

  async componentDidMount() {
    const { match, 
      addSingleRiderToStore, 
      addStatsToSingleRider, 
      riders } = this.props;

    if (!riders.length) {
      const currentRider = match.params.rider;
      const riderObj = await getSingleRider(currentRider);
      addSingleRiderToStore(riderObj);
      addStatsToSingleRider(riderStatsObject);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { match, riders, singleRider } = this.props;

    let displayRider = {};

    if (singleRider.id) {
      displayRider = singleRider;
    }

    if (riders.length > 0) {
      displayRider = riders.find( rider => {
        return rider.id === parseInt(match.params.rider, 10);
      });
    }

    return (
      <div className='single-rider-background-div'>
        { !displayRider.id &&        
          <div className='loading-gif'>
            <img 
              src='http://www.benettonplay.com/toys/flipbookdeluxe/flipbooks_gif/2007/08/23/28448.gif' 
              alt='loading-GIF' 
            />
          </div>
        }

        <div className='single-rider-card' 
          style={{display: !displayRider.id ? 'none' : 'flex'}}
        >
          { displayRider.id && 
            <div>
              <img 
                src={displayRider.avatar} 
                alt={displayRider.name}
              />
              <div className='single-rider-card-info-div'>
                <h1>{`${displayRider.name}`}</h1>         
      
                <p className='single-rider-card-title srct-birthday'>
                  {`Birthday: `}
                  <span className='single-rider-card-value srcv-birthday'>
                    {`${displayRider.birthdate}`}
                  </span>
                </p>
      
                <p className='single-rider-card-title srct-sponsor'>
                  {`Sponsor: `}
                  <span className='single-rider-card-value srcv-sponsor'>
                    {`${displayRider.sponsor}`}
                  </span>
                </p>
      
                <p className='single-rider-card-title srct-games-played'>
                  {`Games Played: `}
                  <span className='single-rider-card-value srcv-games-played'>
                    {`${displayRider.games_played || 0}`}
                  </span>
                </p>
      
                <FlagIcon 
                  code={displayRider.country}
                  size={'2x'}
                />
              </div>
            </div>
          }
          { displayRider.Offense &&
            <div className='stats-div'>
              <div className='stats-div-upper'>
                <SVGDonut 
                  stat={displayRider.Offense} 
                  string={'Offense'} 
                />
                <SVGDonut 
                  stat={displayRider.Defense} 
                  string={'Defense'} 
                />
              </div>
              <div className='stats-div-lower'>
                <SVGDonut 
                  stat={displayRider.Difficulty} 
                  string={'Difficulty'} 
                />
                <SVGDonut 
                  stat={displayRider.Overall} 
                  string={'Overall'} 
                />
              </div>                       
            </div>
          }
        </div>
      </div>
    );  
  }
}

export const mapStateToProps = ({riders, singleRider}) => ({
  riders,
  singleRider
});

export const mapDispatchToProps = (dispatch) => ({
  addSingleRiderToStore: (currentRider) => 
    dispatch(addSingleRiderToStore(currentRider)),
  addStatsToSingleRider: (riderStatsObject) => 
    dispatch(addStatsToSingleRider(riderStatsObject))
});

export default withRouter(connect(mapStateToProps, 
  mapDispatchToProps)(SingleRider));

SingleRider.propTypes = {
  match: PropTypes.object,
  riders: PropTypes.array,
  singleRider: PropTypes.object
};

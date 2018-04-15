import { combineReducers } from 'redux';
import games from './games-reducer';
import riders from './riders-reducer';
import gameForPlayer from './game-for-player-reducer';
import singleRider from './single-rider-reducer';

const rootReducer = combineReducers({
  games,
  riders,
  gameForPlayer,
  singleRider
})

export default rootReducer;
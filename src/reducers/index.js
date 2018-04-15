import { combineReducers } from 'redux';
import games from './games-reducer';
import riders from './riders-reducer';
import gameForPlayer from './player-reducer';

const rootReducer = combineReducers({
  games,
  riders,
  gameForPlayer
})

export default rootReducer;
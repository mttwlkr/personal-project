import { combineReducers } from 'redux';
import games from './games-reducer';
import riders from './riders-reducer';
import player from './player-reducer';

const rootReducer = combineReducers({
  games,
  riders,
  player
})

export default rootReducer;
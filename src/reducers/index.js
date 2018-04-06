import { combineReducers } from 'redux';
import games from './games-reducer';
import riders from './riders-reducer';

const rootReducer = combineReducers({
  games,
  riders
})

export default rootReducer;
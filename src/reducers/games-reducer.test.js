import gamesReducer from './games-reducer.js'
import { mockAPIGamesData } from '../mock-data/mockData';

describe('gamesReducer', () => {

  it('should return an empty object if state is undefined', () => {
    const answer = gamesReducer(undefined, "")
    expect(answer).toEqual({})
  })

  it('should return an object of games if stat is defined', () => {
    const mockAction = {type: "ADD_GAMES_TO_STORE", games: {posts: ['Johnny Moesley vs Johnny Moesley']}}
    const answer = gamesReducer({}, mockAction)
    expect(answer).toEqual(mockAction.games)
  })
})
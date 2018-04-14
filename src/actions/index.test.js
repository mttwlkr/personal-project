import * as actions from './index';

describe('actions', () => {

  it('should return a type and a payload of games', () => {
    const mockGames = {game: "Johnny Moesely vs Johnny Moesely"}
    const expected = {
      "games": {"game": "Johnny Moesely vs Johnny Moesely"}, 
      "type": "ADD_GAMES_TO_STORE"
    }
    const actioned = actions.addGamesToStore(mockGames)
    expect(actioned).toEqual(expected)
  })

  it('should return a type and a payload of riders', () => {
    const mockRiders = {rider: 'Johnny Moesely'}
    const expected = {
      "riders": {rider: 'Johnny Moesely'},
      "type": "ADD_RIDERS_TO_STORE"
    }
    const actioned = actions.addRidersToStore(mockRiders)
    expect(actioned).toEqual(expected)
  })

  it('should return a type and a payload of stats', () => {
    const mockStats = { "slvsh_id": 5, "stat_rider_name": "Johnny Moesely"}
    const expected = {"type": "ADD_STATS_TO_STORE", riderStats: { "slvsh_id": 5, "stat_rider_name": "Johnny Moesely"}}
    const actioned = actions.addStatsToStore(mockStats)
    expect(actioned).toEqual(expected)
  })

  it('should return a type and a payload of an id', () => {
    const mockID = 15
    const expected = {"type": "ADD_VIDEO_TO_PLAYER", id: 15}
    const actioned = actions.addVideoToPlayer(mockID)
    expect(actioned).toEqual(expected)
  })

  it('should return a type and payload of the current game', () => {
    const mockCurrentGame = {gameID: 666}
    const expected = { type: 'ADD_SINGLE_GAME_TO_STORE', currentGame: { gameID: 666 } }
    const actioned = actions.addSingleGameToStore(mockCurrentGame)
    expect(actioned).toEqual(expected)
  })
})
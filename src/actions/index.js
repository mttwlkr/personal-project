export const addGamesToStore = (games) => ({
  type: 'ADD_GAMES_TO_STORE',
  games
})

export const addRidersToStore = (riders) => ({
  type: 'ADD_RIDERS_TO_STORE',
  riders
})

export const addStatsToStore = (riderStats) => ({
  type: 'ADD_STATS_TO_STORE',
  riderStats
})

export const addVideoToPlayer = (id) => ({
  type: 'ADD_VIDEO_TO_PLAYER',
  id
})

export const addSingleGameToStore = (currentGame) => ({
  type: 'ADD_SINGLE_GAME_TO_STORE',
  currentGame
})

export const addSingleRiderToStore = (currentRider) => ({
  type: 'ADD_SINGLE_RIDER_TO_STORE',
  currentRider
})

export const addStatsToSingleRider = (riderStatsObject) => ({
  type: 'ADD_STATS_TO_SINGLE_RIDER',
  riderStatsObject
})
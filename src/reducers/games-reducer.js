const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GAMES_TO_STORE':
      return {...action.games}
    case 'ADD_SINGLE_GAME_TO_STORE':
      console.log('currentState', state)
      console.log('action.currentGame: ', action.currentGame)
      return {...state, currentGame: action.currentGame}
    default:
      return state
  }
}

export default gamesReducer
const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GAMES_TO_STORE':
      return {...action.games}
    default:
      return state
  }
}

export default gamesReducer
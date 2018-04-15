const singleRiderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SINGLE_RIDER_TO_STORE':
      return {...action.currentRider}
    case 'ADD_STATS_TO_SINGLE_RIDER':
      return Object.assign({}, state, action.riderStatsObject[state.id])
    default:
      return state
  }
}

export default singleRiderReducer
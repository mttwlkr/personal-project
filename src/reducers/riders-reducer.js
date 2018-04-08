const ridersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RIDERS_TO_STORE':
      return [...action.riders]
    case 'ADD_STATS_TO_STORE':
      return state.map( stateRider => {
        return Object.assign({}, stateRider, action.riderStats[stateRider.id])
      })
    default:
      return state
  }
}

export default ridersReducer;
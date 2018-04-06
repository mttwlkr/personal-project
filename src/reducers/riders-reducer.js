const ridersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RIDERS_TO_STORE':
      return [...action.riders]
    default:
      return state
  }
}

export default ridersReducer;
const gameForPlayerReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO_TO_PLAYER':
      return [action.id, ...state]
    default:
      return state
  }
}

export default gameForPlayerReducer;
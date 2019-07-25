const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'bring_posts':
      return { ...state, posts: action.payload}
    default:
      return state
  }
}
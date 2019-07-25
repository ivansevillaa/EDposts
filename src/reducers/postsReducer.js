const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.posts) {
    case 'bring_posts':
      return { ...state, posts: action}
    default:
      return state
  }
}
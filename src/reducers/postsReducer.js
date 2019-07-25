import { BRING_ALL } from '../types/postsTypes'

const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BRING_ALL:
      return { ...state, posts: action.payload}
    default:
      return state
  }
}
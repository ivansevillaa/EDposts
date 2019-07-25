import { 
  BRING_ALL, 
  LOADING, 
  ERROR,
  CHANGE_TITLE,
  CHANGE_BODY,
  POST_ADDED
} from '../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
  title: '',
  body: '',
  back: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BRING_ALL:
      return { ...state, posts: action.payload, loading: false, back: false }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case CHANGE_TITLE:
      return { ...state, title: action.payload }
    case CHANGE_BODY:
      return { ...state, body: action.payload }
    case POST_ADDED:
      return { ...state, posts: [], loading: false, error: '', back: true, title: '', body: '' }
    default:
      return state
  }
}
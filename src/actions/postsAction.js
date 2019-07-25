import axios from 'axios'
import { 
  BRING_ALL, 
  LOADING, 
  ERROR ,
  CHANGE_TITLE,
  CHANGE_BODY,
  POST_ADDED
} from '../types/postsTypes'

export const bringAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: BRING_ALL,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Algo salió mal, intente más tarde.'
    })
  }
}

export const changePostTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  })
}

export const changePostBody = (body) => (dispatch) => {
  dispatch({
    type: CHANGE_BODY,
    payload: body
  })
}

export const add = (newPost) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    console.log(response.data)
    dispatch({
      type: POST_ADDED,
      payload: response.data
    })
  } catch (error ) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'No se pudo agregar el post. Intente mas tarde.'
    })
  }
}
import axios from 'axios'
import { BRING_ALL, LOADING, ERROR } from '../types/postsTypes'

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
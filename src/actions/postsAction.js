import axios from 'axios'
import { BRING_ALL } from '../types/postsTypes'

export const bringAll = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  dispatch({
    type: BRING_ALL,
    payload: response.data
  })
}
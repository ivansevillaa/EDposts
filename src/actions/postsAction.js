import axios from 'axios'

export const bringAll = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  dispatch({
    type: 'bring_posts',
    payload: response.data
  })
}
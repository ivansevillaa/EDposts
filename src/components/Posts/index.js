import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Wrapper, Table } from './styles'

export const Posts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    }
    fetchData()
  }, [])

  const putRows = () => (
    posts.map((item) => (
      <tr key={ item.id }>
        <td>{ item.title }</td>
      </tr>
    ))
  )

  return(
    <Wrapper>
      <h1>EDposts</h1>
      <Table>
        <thead>
          <tr>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          { putRows() }
        </tbody>
      </Table>
    </Wrapper>
  )
}
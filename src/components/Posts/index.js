import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as postsAction from '../../actions/postsAction'

import { Wrapper, Table } from './styles'

const Posts = (props) => {
  useEffect(() => {
    props.bringAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const putRows = () => (
    props.posts.map((item) => (
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

const mapStateToProps = (reducers) => reducers.postsReducer

export default connect(mapStateToProps, postsAction)(Posts)
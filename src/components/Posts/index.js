import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as postsAction from '../../actions/postsAction'

import { Wrapper, Table } from './styles'
import Spinner from '../Spinner'
import Fatal from '../Fatal'

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

  const putContent = () => {
    if(props.loading) return <Spinner />

    if(props.error) return <Fatal message={ props.error } />
    
    return(
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
    )
  }
  
  return(
    <Wrapper>
      <h1>EDposts</h1>
      { putContent() }
    </Wrapper>
  )
}

const mapStateToProps = (reducers) => reducers.postsReducer

export default connect(mapStateToProps, postsAction)(Posts)
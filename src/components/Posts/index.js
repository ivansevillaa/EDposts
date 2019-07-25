import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as postsAction from '../../actions/postsAction'

import { Wrapper } from './styles'
import Spinner from '../Spinner'
import Fatal from '../Fatal'
import Table from '../Table'

const Posts = (props) => {
  useEffect(() => {
    props.bringAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const putContent = () => {
    if(props.loading) return <Spinner />
    if(props.error) return <Fatal message={ props.error } />
    return <Table />
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
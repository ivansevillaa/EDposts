import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as postsAction from '../../actions/postsAction'

import { Wrapper } from './styles'
import Spinner from '../Spinner'
import Fatal from '../Fatal'
import Table from '../Table'

const Posts = (props) => {
  useEffect(() => {
    if (!props.posts.length) {
      props.bringAll()
    }
  }, [props])

  const putContent = () => {
    if(props.loading) return <Spinner />
    if(props.error) return <Fatal message={ props.error } />
    return <Table />
  }
  
  return(
    <Wrapper>
      <h1>EDposts</h1>
      <Link to='/save'>
        <button>
          Agregar post
        </button>
      </Link>
      { putContent() }
    </Wrapper>
  )
}

const mapStateToProps = (reducers) => reducers.postsReducer

export default connect(mapStateToProps, postsAction)(Posts)
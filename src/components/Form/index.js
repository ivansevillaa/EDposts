import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as postsAction from '../../actions/postsAction'

import Spinner from '../Spinner'
import Fatal from '../Fatal'

const Form = (props) => {
  const handleTitleChange = (event) => {
    props.changePostTitle(event.target.value)
  }

  const handleBodyChange = (event) => {
    props.changePostBody(event.target.value)
  }

  const save = (event) => {
    event.preventDefault()
    const { title, body, add } = props
    const newPost = {
      title,
      body
    }
    add(newPost)
  }

  const handleDisabled = () => {
    const { title, body, loading } = props
    if (loading) return true
    if (!title || !body ) return true
    return false
  }

  const showAction = () => {
    const { loading, error } = props
    if (loading) return <Spinner />
    if (error) return <Fatal message={props.error} />
  }

  return(
    <div>
      { props.back  && <Redirect to='/' /> }
      <h1>{ props.titleForm }</h1>
      <form>
        <input
          type="text" 
          placeholder='Título del post' 
          value={ props.title }
          onChange={ handleTitleChange }
        />
        <input 
          type="text" 
          placeholder='Redacte su post...'
          value={ props.body }
          onChange={ handleBodyChange }
        />
        <button
          onClick={ save }
          disabled={ handleDisabled() }
        >
          Guardar
        </button>
      </form>
      { showAction() }
    </div>
  )
}

const mapStateToProps = (reducers) => reducers.postsReducer 

export default connect(mapStateToProps, postsAction)(Form)
/*
  Component Form
*/
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as postsAction from '../../actions/postsAction'

import Spinner from '../Spinner'
import Fatal from '../Fatal'

const Form = (props) => {
  /*
    useEffect se encarga de ejecutar las acciones "changePostTitle" y "changePostBody", solamente si existe un valor en el match.params.id
  */
  useEffect(() => {
    const {
      match: { params: { id } },
      posts,
      changePostTitle,
      changePostBody
    } = props

    if (id) {
      changePostTitle(posts[id].title)
      changePostBody(posts[id].body)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /*
    estas dos funciones de abajo se encargan de manejar el cambio que van sufriendo los inputs
  */
  const handleTitleChange = (event) => {
    props.changePostTitle(event.target.value)
  }

  const handleBodyChange = (event) => {
    props.changePostBody(event.target.value)
  }

  /*
    la funcion save se ejecuta cuando el boton "guardar" sufre un click y se engarga, de guardar el post ya sea que este haya sido editado o sea uno nuevo
  */
  const save = (event) => {
    event.preventDefault()
    const {
      match: { params: { id } },
      posts, 
      title, 
      body, 
      add,
      edit
    } = props

    const newPost = {
      title,
      body
    }
    
    if (id) {
      const post = posts[id]
      const postEdited = { ...newPost, id: post.id }
      edit(postEdited)
    } else {
      add(newPost)
    }
  }

  /*
    handleDisabled permite que el boton solo este habilitado cuando no se este en estado de carga y cuado los inputs del titulo y el cuerpo del post no esten vacios
  */
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

/*
  a traves del mapStateToProps y del connect pasamos todas las acciones y el reducer del posts a las props del componente
*/
const mapStateToProps = (reducers) => reducers.postsReducer 

export default connect(mapStateToProps, postsAction)(Form)
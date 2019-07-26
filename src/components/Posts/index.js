/*
  Component "Posts"
*/
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as postsAction from '../../actions/postsAction'

import { Wrapper } from './styles'
import Spinner from '../Spinner'
import Fatal from '../Fatal'
import Table from '../Table'

const Posts = (props) => {
  /*
    Este useEffect se encarga de traer todos los datos de jsonplaceholder, unicamente si previamente ya no fueron traidos.
  */
  useEffect(() => {
    if (!props.posts.length) {
      props.bringAll()
    }
  }, [props])

  /*
    La funcion putContent se encarga de renderizar un Spinner si la app esta en estado de carga, un mensaje de error en la pantalla en caso de que este en estado de error, y en caso de este con un estado exitoso renderizará el component "Table"
  */
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
/*
  a traves del mapStateToProps y del connect pasamos todas las acciones y el reducer del posts a las props del componente
*/
const mapStateToProps = (reducers) => reducers.postsReducer

export default connect(mapStateToProps, postsAction)(Posts)
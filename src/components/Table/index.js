/*
  Componente Table
*/
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as postsAction from '../../actions/postsAction'

import { Tabla } from './styles'

const Table = (props) => {
  /*
    La funcion putRows se encarga de renderizar todas las filas de la tabla
  */
  const putRows = () => (
    props.posts.map((item) => (
      <tr key={ item.id }>
        <td>
          <h3>{ item.title }</h3>
          <p>{ item.body }</p>
        </td>
        <td>
          <Link to={`edit/${item.id}`}>
            <button>
              Editar
            </button>
          </Link>
        </td>
        <td>
          <button onClick={ () => props.remove(item.id) }>
            Eliminar
          </button>
        </td>
      </tr>
    ))
  )

  return(
    <Tabla>
      <thead>
        <tr>
          <th>Posts</th>
        </tr>
      </thead>
      <tbody>
        { putRows() }
      </tbody>
    </Tabla>
  )
}

/*
  a traves del mapStateToProps y del connect pasamos todas las acciones y el reducer del posts a las props del componente
*/
const mapStateToProps = (reducers) => reducers.postsReducer 

export default connect(mapStateToProps, postsAction)(Table)
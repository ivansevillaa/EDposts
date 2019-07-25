import React from 'react'
import { connect } from 'react-redux'

import { Tabla } from './styles'

const Table = (props) => {
  const putRows = () => (
    props.posts.map((item) => (
      <tr key={ item.id }>
        <td>{ item.title }</td>
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

const mapStateToProps = (reducers) => reducers.postsReducer 

export default connect(mapStateToProps)(Table)
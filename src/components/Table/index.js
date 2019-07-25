import React from 'react'

import { Wrapper, Tabla } from './styles'

export const Table = () => {
  return(
    <Wrapper>
      <Tabla>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ivan</td>
            <td>oscar</td>
            <td>sevilla</td>
          </tr>
          <tr>
            <td>jose</td>
            <td>antonio</td>
            <td>garivaldi</td>
          </tr>
        </tbody>
      </Tabla>
    </Wrapper>
  )
}
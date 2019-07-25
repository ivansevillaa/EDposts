import React from 'react'

import { Error } from './styles' 

const Fatal = ({ message }) => (
  <Error>
    { message }
  </Error>
)

export default Fatal
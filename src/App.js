import React, { Fragment } from 'react'

import { GlobalStyle } from './GlobalStyles'
import { Table } from './components/Table'

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <Table />
  </Fragment>
)
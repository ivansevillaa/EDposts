import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyles'
import { Posts } from './components/Posts'

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route exact path='/' component={ Posts } />
  </BrowserRouter>
)
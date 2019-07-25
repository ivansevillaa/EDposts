import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyles'
import Posts from './components/Posts'
import Form from './components/Form'

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route exact path='/' component={ Posts } />
    <Route exact path='/save' component={ () => <Form titleForm='Agregar Post' /> } />
  </BrowserRouter>
)
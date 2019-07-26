/*
  App, aca se encuentran los estilos globales, y las rutas de la aplicación
*/
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyles'
import Posts from './components/Posts'
import Form from './components/Form'

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route exact path='/' component={ Posts } />
    <Route exact path='/save' component={ Form } />
    <Route exact path='/edit/:id' component={ Form } />
  </BrowserRouter>
)
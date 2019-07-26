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
    <Route 
      exact path='/save' 
      render={(props) => (
        <Form {...props} titleForm='Agregar Post' />
      )} 
    />
    <Route 
      exact path='/edit/:id'
      render={(props) => (
        <Form {...props} titleForm='Editar Post' />
      )}  
    />
  </BrowserRouter>
)
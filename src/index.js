/*
  Entry point de la app, aca encontramos el store de la App, y renderizamos el componente 'App'
*/
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

import { App } from './App'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
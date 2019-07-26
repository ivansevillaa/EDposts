/*
  Actions, los encargados de enviar la accion al reducer a tráves del dispatch
  Quiero aclarar que los metodos post, put, delete si son efectuados pero no se ven refejados en la UI de la aplicacion porque no puedo modificar la data de jsonplaceholder, pero de todas formas si la muestro en el console.log, con su titulo correspondiente, el contenido del post y su id. En caso de que se haya eliminado muestro el response con status 200 y la url del post eliminado.
*/

import axios from 'axios'
import { 
  BRING_ALL, 
  LOADING, 
  ERROR ,
  CHANGE_TITLE,
  CHANGE_BODY,
  SAVE
} from '../types/postsTypes'

/*
  bringAll se encarga de traer todos los datos de los posts de jsonplaceholder, teniendo en cuenta los casos de exito, carga y error
*/
export const bringAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: BRING_ALL,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Algo salió mal, intente más tarde.'
    })
  }
}

/*
  changePostTitle se encarga de cambiar el titulo del post
*/
export const changePostTitle = (title) => (dispatch) => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  })
}

/*
  changePostBody se encarga de cambiar el contenido del post
*/
export const changePostBody = (body) => (dispatch) => {
  dispatch({
    type: CHANGE_BODY,
    payload: body
  })
}

/*
  all se encarga de agregar un nuevo post, teniendo en cuenta los casos de exito, carga y error
*/
export const add = (newPost) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    console.log(response.data)
    console.log(response)
    dispatch({
      type: SAVE,
      payload: response.data
    })
    alert('¡POST AGREGADO SATISFACTORIAMENTE! Debido a que no tengo acceso para agregar datos a jsonplaceholder, el post que creo no se vera reflejado en la pantalla de posts. Pero, puede comprobar el metodo post en la consola!')
  } catch (error ) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'No se pudo agregar el post. Intente mas tarde.'
    })
  }
}

/*
  edit se encarga de editar un nuevo post, teniendo en cuenta los casos de exito, carga y error
*/
export const edit = (postEdited) => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postEdited.id}`, postEdited)
    console.log(response.data)
    console.log(response)
    dispatch({
      type: SAVE,
      payload: response.data
    })
    alert('¡POST EDITADO SATISFACTORIAMENTE! Debido a que no tengo acceso para modificar los datos en jsonplaceholder, el post editado no se vera reflejado en la pantalla de posts. Pero, puede comprobar el metodo put en la consola!')
  } catch (error ) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'No se pudo editar el post. Intente mas tarde.'
    })
  }
}

/*
  remove se encarga de agregar un nuevo post, teniendo en cuenta los casos de exito, carga y error
*/
export const remove = (id) => async (dispatch) => {
  dispatch({
    type: LOADING
  })

  try {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(response)
    dispatch({
      type: BRING_ALL,
      payload: []
    })
    alert('¡POST ELIMINADO SATISFACTORIAMENTE! Debido a que no tengo acceso para eliminar datos en jsonplaceholder, el post eliminado no se vera reflejado en la pantalla de posts. Pero, puede comprobar el metodo delete en la consola!')
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: ERROR,
      payload: 'No se pudo eliminar el post. Intente más tarde'
    })
  }
}
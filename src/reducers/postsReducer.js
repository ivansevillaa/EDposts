/*
  Reducer, el encargado de actualizar el store de nuestra app
*/
import { 
  BRING_ALL, 
  LOADING, 
  ERROR,
  CHANGE_TITLE,
  CHANGE_BODY,
  SAVE
} from '../types/postsTypes'

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
  title: '',
  body: '',
  back: false
}
/*
 el store se actualiza dependiendo el caso de la accion, el cual viene a traves del type, y se actualiza con los datos especificados en el return
*/
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case BRING_ALL:
      /*
        este caso actualiza el array vacio de posts, con lo que nos traiga el payload de la accion
      */
      return { 
        ...state, 
        posts: action.payload, 
        loading: false, 
        back: false 
      }
    case LOADING:
      /*
        este caso se encarga de poner el estado de carga en verdadero
      */
      return {
        ...state, 
        loading: true 
      }
    case ERROR:
      /*
        este caso se encarga de poner el estado con el mensaje que viene del payload de la accion
      */
      return { 
        ...state, 
        error: action.payload, 
        loading: false 
      }
    case CHANGE_TITLE:
      /*
        cambiamos el titulo del post
      */
      return { 
        ...state, 
        title: action.payload 
      }
    case CHANGE_BODY:
      /*
        cambiamos el contenido del post
      */
      return { 
        ...state, 
        body: action.payload 
      }
    case SAVE:
      /*
        guardamos el post nuevo, o el post editado
      */
      return { 
        ...state, 
        loading: false, 
        // lo guardo como un array vacio por lo aclarado anteriormente que no puedo modificar el jsonplaceholder
        posts: [],
        error: '', 
        back: true, 
        title: '', 
        body: '' 
      }
    default:
      return state
  }
}
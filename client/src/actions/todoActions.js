import * as ACTION_TYPES from './types'
import axios from 'axios'

export const getTodos = () => {
  return {
    type: ACTION_TYPES.GET_TODOS, 
  }
  // console.log('getitemss')
  // axios.get('/api/items')
  // .then(res => 
  //   dispatch({
  //     type: ACTION_TYPES.GET_ITEMS, 
  //     payload: res.data
  //   })
  // ) 
}

export const deleteTodo = (id) => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    payload: id
  }
}

export const addTodo = (todo) => {
  return {
    type: ACTION_TYPES.ADD_TODO,
    payload: todo
  }
}

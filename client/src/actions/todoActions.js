import * as ACTION_TYPES from './types'
import axios from 'axios'

export const getTodos = (id) => dispatch => {
  axios.get(`/api/todos/${id}`)
    .then(res =>
      dispatch({
        type: ACTION_TYPES.GET_TODOS, 
        payload: res.data
      })
    ) 
}

export const addTodo = (todo) => dispatch => {
  console.log(todo)
  axios.post('/api/todos/create', todo)
    .then(res=> 
      dispatch({
        type: ACTION_TYPES.ADD_TODO,
        payload: res.data
      })
    )
}

export const deleteTodo = (_id) => dispatch => {
  console.log(_id)
  axios.delete(`/api/todos/${_id}`)
    .then(res => 
      dispatch({
        type:ACTION_TYPES.DELETE_TODO,
        payload: _id
      })
    )
}

export const getOneTodo = (id) => dispatch => {
  axios.get(`api/todos/findNote/${id}`)
    .then(res => 
      dispatch({
        type: ACTION_TYPES.GET_TODOS,
        payload: res.data
      }))
}
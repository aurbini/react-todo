import * as ACTION_TYPES from './types'
import axios from 'axios'

export const getTodos = () => dispatch => {
  console.log('gettodo')
  axios.get('/api/todos')
  .then(res =>
    dispatch({
      type: ACTION_TYPES.GET_TODOS, 
      payload: res.data
    })
  ) 
}

export const addTodo = (todo) => dispatch => {
  const body = {
    description: todo
  }
  console.log(body)
  axios.post('/api/todos/', body)
  .then(res=> 
    dispatch({
      type: ACTION_TYPES.ADD_TODO,
      payload: res.data
    })
  )
}

export const deleteTodo = (_id) => dispatch => {
  console.log(_id)
  axios.delete(`api/todos/${_id}`)
  .then(res => 
    dispatch({
      type:ACTION_TYPES.DELETE_TODO,
      payload: _id
    })
  )
}

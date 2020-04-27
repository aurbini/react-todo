import * as ACTION_TYPES from '../actions/types'
import {v1 as uuid} from 'uuid'



const initialState = {
  todos: [
    {id: uuid(), title: "bacon"}, 
    {id: uuid(), title: "egg"}, 
    {id: uuid(), title: "cheese"}, 
  ]
}

export default function(state = initialState, action){
  switch(action.type) {
    case ACTION_TYPES.GET_TODOS: 
      return {
        ...state
      }
    case ACTION_TYPES.ADD_TODO: 
      return {
        todos: [
          ...state.todos, {
            id: uuid(), 
            title: action.payload
          }
        ]
      }
    case ACTION_TYPES.DELETE_TODO:
      return {
        todos: 
          state.todos.filter(todo=> todo.id !== action.payload)
      }
    default: 
      return {
        ...state,
      }
  }
}
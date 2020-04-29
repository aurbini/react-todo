import * as ACTION_TYPES from '../actions/types'


export default function(state, action){
  switch(action.type) {
    case ACTION_TYPES.GET_TODOS: 
      return {
        todos: [...action.payload ]
      }
    case ACTION_TYPES.ADD_TODO: 
      return {
        todos: [
          ...state.todos,  
          action.payload
        ]
      }
    case ACTION_TYPES.DELETE_TODO:
      return {
        todos: 
          state.todos.filter(todo=> todo._id !== action.payload)
      }
    default: 
      return {
        ...state,
      }
  }
}
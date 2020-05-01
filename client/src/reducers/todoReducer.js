import * as ACTION_TYPES from '../actions/types'


const initialState = [
  {
    id: null,
    title: null, 
    note: null
  }
]

export default function(state = initialState, action){
  switch(action.type) {
    case ACTION_TYPES.GET_TODOS: 
      return [
        ...action.payload
      ]
      case ACTION_TYPES.GET_TODO: 
      return [
        action.payload
      ]
    case ACTION_TYPES.ADD_TODO: 
      return [
          ...state,
          action.payload
      ]
    case ACTION_TYPES.DELETE_TODO:
      return state.filter(note=> note._id !== action.payload)
    default: 
      return {
        ...state,
      }
  }
}
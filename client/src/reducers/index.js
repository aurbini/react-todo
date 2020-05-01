import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import errorReducer from './errorReducer'


export default combineReducers({
  notes: todoReducer,
  user: userReducer,
  error: errorReducer
})
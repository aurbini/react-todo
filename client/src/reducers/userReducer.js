import { 
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT_SUCCESS, 
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_FAIL }
  from '../actions/types'

const initialState = {
  isAuthenticated: false, 
  selectedNote: null, 
  token: localStorage.getItem('token')
}

export default function(state = initialState, action){
  switch(action.type) {
    case USER_LOADED:
      return {
        isAuthenticated: true,
        ...action.payload
      }
    case LOGIN_SUCCESS: 
    case REGISTER_SUCCESS: 
      console.log(action.payload)
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user.name,
        _id: action.payload.user.id,
        isAuthenticated: true,
      }
    case AUTH_ERROR: 
    case LOGIN_FAIL: 
    case LOGOUT_SUCCESS: 
    case REGISTER_FAIL:
      console.log('remove token')
      localStorage.removeItem('token')
      return {
        ...state,
        token: null, 
        user: null,
        isAuthenticated: false
      }
    default: 
      return {
        ...state
      }
  }
}
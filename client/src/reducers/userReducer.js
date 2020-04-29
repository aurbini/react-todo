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
  user: null, 
  token: localStorage.getItem('token')
}

export default function(state = initialState, action){
  switch(action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case LOGIN_SUCCESS: 
    case REGISTER_SUCCESS: 
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
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
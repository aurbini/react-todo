import {
  USER_LOADED, 
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from './types'
import axios from 'axios';
import { returnErrors} from './errorAction'


export const loadUser = () => (dispatch, getState) => {

  axios.get('/api/user/auth', tokenConfig(getState))
    .then(res =>  dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const login = (user) =>  dispatch => {
  axios.post('/api/user/login', user)
    .then(res => {
      console.log(res)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data 
    })})
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const register = (user) => dispatch => {
  axios.post('/api/user/register', user)
    .then(res => 
      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: REGISTER_FAIL
      })
  })
}

export const logout = () => {
  return({
    type: LOGOUT_SUCCESS
  })
}

export const tokenConfig = getState => {
   //Get token from localStorage
   const token = getState().user.token
   //Headers
   const config = {
     headers: {
       "Content": "application/json"
     }
   }
   if(token){
     config.headers['x-auth-token'] = token
   }
   return config
}


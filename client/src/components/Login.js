import React, { useState} from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import { Route } from 'react-router-dom'
import { Todos } from './Todos'

const Login = () => {

  const dispatch = useDispatch()
  const [ loginInfo, setLoginInfo ] = useState({
    email: '', 
    password: ''
  })
  const isLoggedIn = useSelector(state => state.user.isAuthenticated)

  return (
    <Form 
      onSubmit={(e)=>{
        e.preventDefault()
        dispatch(login(loginInfo))
      }}
      style={{padding: '2rem'}}>
      <FormGroup>
        <Label>Email</Label>
        <Input
          onChange={(e)=>setLoginInfo({
            ...loginInfo, 
            email: e.target.value
          })}></Input>
        <Label>Password</Label>
        <Input 
          onChange={(e)=>setLoginInfo({
            ...loginInfo, 
            password: e.target.value
          })}></Input>
        <Button style={{marginTop: '2rem'}}>Submit</Button>
      </FormGroup>
    </Form>
    );
}
 
export default Login;
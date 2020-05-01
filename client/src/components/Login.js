import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label, Alert } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const Login = () => {

  const dispatch = useDispatch()
  const [ loginInfo, setLoginInfo ] = useState({
    email: '', 
    password: ''
  })
  
  const loginError = useSelector(state => state.error.id)

  const alertError = () => 
    <Alert color="warning">Login Failed, please try again.</Alert>
  

  return (
    <Form 
      onSubmit={(e)=>{
        e.preventDefault()
        dispatch(login(loginInfo))
      }}
      style={{padding: '2rem'}}
    >
    {loginError === "LOGIN_FAIL" 
      ?alertError() 
      : null}
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
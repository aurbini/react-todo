import React, { useState} from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { login } from '../actions/userActions'


const Login = () => {

  const [ loginInfo, setLoginInfo ] = useState({
    email: '', 
    password: ''
  })
  const dispatch = useDispatch()

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
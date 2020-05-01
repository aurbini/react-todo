import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form,
        FormGroup, Input, Label, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { register, login } from '../actions/userActions'

const ModalOne = () => {
 
  const loginErrorMessage = useRef(false)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [ user, setUser ] = useState({
    name: '',
    email: '',
    password: '',
    msg: null
  })

  const dispatch = useDispatch()
  const globalState = {
    isAuthenticated: useSelector(state => state.user.isAuthenticated),
    error: useSelector(state => state.error.id)
  }
  const errorMessage = useSelector(state => state.error.msg.msg)

  const alertError = () => 
    <Alert color="warning">{ errorMessage }</Alert>
  
  return (
    <div>
      { globalState.error === "REGISTER_FAIL"
        ? alertError() 
        : null }
      <Button color="primary" onClick={toggle}>Register </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter YOUR INFORMATION</ModalHeader>
        <ModalBody>
          <Form 
            onSubmit={(e)=> {
              e.preventDefault()
              dispatch(register(user))
              toggle()
            }}
          >
            <FormGroup>
            <Label>name</Label>
              <Input
                id="useContext"
                onChange={(e)=> setUser({
                  ...user, 
                  name: e.target.value
                })}
                type="text">
              </Input>
              <Label>email</Label>
              <Input
                id="useContext"
                onChange={(e)=> setUser({
                  ...user, 
                  email: e.target.value
                })}
                type="text">
              </Input>
              <Label>Password</Label>
              <Input
                id="useContext"
                onChange={(e)=> setUser({
                  ...user, 
                  password: e.target.value
                })}
                type="text">
              </Input>
              <Button>Submit </Button>
          </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalOne;
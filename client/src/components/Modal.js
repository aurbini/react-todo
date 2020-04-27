import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form,
        FormGroup, Input, FormText } from 'reactstrap';
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todoActions'

const ModalOne = () => {
 
 
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [ todo, setTodo ] = useState()
  const dispatch = useDispatch()

  return (
    <div>
      <Button color="primary" onClick={toggle}>Add Item</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a To-Do</ModalHeader>
        <ModalBody>
          <Form 
            onSubmit={(e)=> {
              e.preventDefault()
              dispatch(addTodo(todo))
              toggle()
            }}
          >
            <FormGroup>
              <Input
                id="useContext"
                onChange={(e)=> setTodo(e.target.value)}
                type="text">
              </Input>
              <Button>Add Item </Button>
          </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalOne;
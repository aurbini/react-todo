import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form,
        FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../actions/todoActions'

const ModalOne = () => {
 
  const authorID = useSelector(state => state.user._id)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [ todo, setTodo ] = useState({
    authorID
  })
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
              <Label> Title </Label>
              <Input
                id="useContext"
                onChange={(e)=> setTodo({
                  ...todo, 
                  title: e.target.value
                })}
                type="text">
              </Input>
              <Label> Note </Label>
              <Input
                style={{minHeight: '100px'}}
                id="useContext"
                onChange={(e)=> setTodo({
                  ...todo, 
                  note: e.target.value
                })}
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
import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {  Container, ListGroup, 
          ListGroupItem, Button,
          Row, Col } 
  from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getTodos, deleteTodo } from '../actions/todoActions'
import { Route, Link } from 'react-router-dom'
import NoteBody from './NoteBody'
import Home from './Hero'

const NoteTitle = () => {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.user._id)
  const notes = useSelector(state => state.notes)
  useEffect(()=>{
    dispatch(getTodos(userId))
  },[])
  console.log(notes)
  return ( 
    <Fragment> 
      <Col sm='4'>
        <ListGroup mt="10" sm='6'> 
        {notes.length > 0 ? 
          <h3>Note Titles</h3> :
        <h3>Please Add a Note</h3> }
          <TransitionGroup >
        {
        notes.length > 0 ? 
          notes.map(({ _id, title })=> (
            <CSSTransition key={_id} timeout={500} classNames="fade"> 
              <ListGroupItem>
                <Row >
                  <Col sm="6" xs="4">
                    <span>{title}</span>
                  </Col>
                  <Col sm="6" xs="2"> 
                    <Row>
                      <Link>
                        <Button
                            tag={Link}
                            to={`/todos/${userId}/${_id}`}
                            color="info"
                            style={{marginBottom: '2rem'}}
                          >Display
                        </Button>
                      </Link>
                      <Button
                        onClick={()=> dispatch(deleteTodo(_id))}
                        color="danger"
                        style={{marginBottom: '2rem', marginLeft: '1rem'}}
                        >Delete</Button>
                    </Row>
                  </Col>            
                </Row>
              </ListGroupItem>    
            </CSSTransition>
            ))
          : ""}
          </TransitionGroup>
        </ListGroup> 
      </Col>
     <Route exact path={`/todos/${userId}`} render={() => {
      if(notes.length > 0) return <h3>Please select a note</h3>} 
      }/>
     <Route path={`/todos/${userId}/:note_ID`} render={() => {
       if(notes) return <NoteBody /> 
       return <Home /> 
     }
     }/> 
   </Fragment>
  );
}
 
export default NoteTitle;
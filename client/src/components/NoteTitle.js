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
  console.log(notes)
  useEffect(()=>{
    dispatch(getTodos(userId))
  },[])

  const logDisplay = () => {
    console.log('display hit')
  }

  return ( 
    <Fragment> 
      <Col xs={12} sm='5'>
        <ListGroup sm='6'> 
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
                  <Col xs="4" sm="6">
                    <span>{title}</span>
                  </Col>
                  <Col xs={3} sm={2} >
                    <Link>
                      <Button
                        tag={Link}
                        to={`/todos/${userId}/${_id}`}
                        color="info"
                        style={{marginBottom: '2rem'}}
                          >Display
                      </Button>
                    </Link>
                  </Col>
                  <Col xs={3} sm={2}>
                    <Button
                      onClick={()=> dispatch(deleteTodo(_id))}
                      color="danger"
                      style={{marginBottom: '2rem', marginLeft: '1rem'}}
                      >Delete
                    </Button>
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
       if(notes[0]._id) return <NoteBody notes={notes} /> 
       return <Home /> 
     }
     }/> 
   </Fragment>
  );
}
 
export default NoteTitle;
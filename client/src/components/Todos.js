import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoActions";

import { Container, ListGroup, ListGroupItem, 
        Button, Row, Col } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ShoppingList = (props) => {

  const { description, id, handleDelete, updateTodo, complete} = props; 

  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  return ( 
    <Container style={{marginTop: '3rem'}}>
       <ListGroup mt="10"> 
       <TransitionGroup className={ShoppingList}>
          {todos.map(({ id, title })=> (
            <CSSTransition key={id} timeout={500} classNames="fade"> 
               <ListGroupItem>
                <Row >
                  <Col sm="8" xs="4">
                    <span>{title}</span>
                  </Col>
                  <Col sm="4" xs="2"> 
                    <Button
                      onClick={()=> dispatch(deleteTodo(id))}
                      color="danger"
                      style={{marginBottom: '2rem'}}
                      >Delete</Button>
                  </Col>            
                </Row>
              </ListGroupItem>    
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>  
    </Container>
  )
}


export default ShoppingList;







// export default (props) => {
//   // const { description, id, handleDelete, updateTodo, complete} = props; 

//   const todos = useSelector(state => state.todo.todos)
//   const dispatch = useDispatch()

//   return ( 
//     <ul className="todo-list">
//       {todos.map(todo => {
//         return (
//           <li >{todo.title}
//             <button>Complete</button>
//             <button onClick={()=> dispatch(deleteTodo(todo.id))}>Remove</button>
//           </li>
//         )
//         })}
//     </ul>
//   )
// }
 
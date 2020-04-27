import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todoActions'


const TodoInput = () => {

  const [ todo, setTodo ] = useState()
  const dispatch = useDispatch()

  return ( 
    <div>
      <h1>To do List</h1>
      <form onSubmit={(e)=> {
        e.preventDefault()
        dispatch(addTodo(todo))
      }}>
      <input  
        placeholder="enter todo"
        onChange={(e)=> setTodo(e.target.value)}
      >
      </input>
      </form>
    </div>
   );
}
 
export default TodoInput;
import React from 'react';
import './todo.css'; 

export default (props) => {
  const { description, id, handleDelete, updateTodo, complete} = props; 


  return ( 
    <li style={{ textDecoration: complete ? "line-through" : "" }} className="todo">{ description }
      <button id={id} onClick={()=>updateTodo(id)}>Complete</button>
      <button id={id} onClick={()=>handleDelete(id)}>Remove</button>
    </li>
   );
}
 
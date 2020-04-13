import React from 'react';
import './todo.css'; 

export default (props) => {
  const { name, id, handleDelete, updateTodo, complete} = props; 


  return ( 
    <li style={{ textDecoration: complete ? "line-through" : "" }} className="todo">{ name }
      <button id={id} onClick={()=>updateTodo(id)}>Complete</button>
      <button id={id} onClick={()=>handleDelete(id)}>Remove</button>
    </li>
   );
}
 
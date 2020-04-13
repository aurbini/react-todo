import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import axios from "axios"; 
import Todo from "./components/Todo"; 

function App() {
  const [ todos, setTodos ] = useState([
  ]); 
  const [ value, setValue ] = useState(""); 
  const todoInput = useRef(); 


  useEffect(() => {
    fetchData()
  },[])
  
  const handleDelete = async (id) => {
    // console.log(id); 
    const res = await axios.delete('/api/todoList/' + id); 
    fetchData(); 
  }
  
  const fetchData = async () => {
    const { data } = await axios.get('/api/todoList')
    console.log(data);
    setTodos(data);
  }

  const updateTodo = async (id) => {
    const { data } = await axios.put('/api/todoList', { id } );
    fetchData(); 
  }

  const renderTodos = () => {
    // console.log(todos); 
    return todos.map(todo => {
      return <Todo name={todo.name} complete={todo.complete} updateTodo={updateTodo} handleDelete={handleDelete} id={todo._id} />
    })
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const body = {
      name: todoInput.current.value
    }
    // console.log(event); 
    axios.post("/api/todoList", body).then(res =>{
      const updatedTodos= [...todos, res.data]; 
      // console.log(updatedTodos)
      setTodos(updatedTodos); 
    })
    todoInput.current.value = "";  
  }
  
  return (
    <div className="App app">
      <h1>To do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input 
          ref={todoInput} 
          placeholder="enter todo"
          ></input>
      </form>
      <ul className="todo-list">
        { todos.length > 0 ? renderTodos() : "no todos"}
      </ul>
    </div>
  );
}

export default App;

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
    const res = await axios.delete('/api/todos/' + id); 
    fetchData(); 
  }
  
  const fetchData = async () => {
    const { data } = await axios.get('/api/todos/')
    console.log(data);
    setTodos(data);
  }

  const updateTodo = async (id) => {
    const { data } = await axios.put(`/api/todos/${id}` );
    fetchData(); 
  }

  const renderTodos = () => {
    return todos.map(todo => {
      return <Todo description={todo.description} complete={todo.complete} updateTodo={updateTodo} handleDelete={handleDelete} id={todo._id} />
    })
  }

  function handleFormSubmit(event){
    event.preventDefault();
    const todo = {
      description: todoInput.current.value
    }
    axios.post("/api/todos/", todo)
      .then(res =>fetchData())
      .catch(err=> console.log(err))
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

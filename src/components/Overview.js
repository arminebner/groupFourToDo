import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import '../App.css';
import '../styles-welcome.css';

//Important components
import Form from "./Form";
import ToDoList from "./ToDoList";


function Overview() {

  //State stuff
  const [inputText, setInputText] = useState(""); // Having text state
  const [todos, setTodos] = useState([]); // For adding functionality, having text ==> completed, true or false, with a specific id to identify the todo
  const [status, setStatus] = useState("all"); // For filtering todos based on status, "all" ==> default status
  const [filteredTodos, setFilteredTodos] = useState([]); // Updating the todos, setTodos with the filtering system


  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);


  //Use effect, runs the function everytime a piece of state changes
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]); // [] arrow function is gonna run only once when the component is first rendered


  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true)); // Check if the todo is completed
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };


  //Save to local
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">

      <header>
     <h1 className="h1-title">Yann's To-Do-List</h1>
      </header>

      <Form
      inputText={inputText}
      todos={todos}
      setTodos={setTodos}
      setInputText={setInputText}
      setStatus={setStatus}
      />

      <ToDoList
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos} />

      <div className="button-container button-container-overview">
          <NavLink className='nav-link' to='/groupFourToDo' >start</NavLink>
      </div>
    </div>
  );
}

export default Overview;

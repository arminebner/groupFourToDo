import React, { useState, useEffect } from "react";
import './App.css';

//Important components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function Overview() {

  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);


  //Use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
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

    </div>
  );
}

export default Overview;

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Welcome from './components/Welcome'
import Overview from './components/Overview'
import './App.css';


function App() {

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
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/overview' component={Overview}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

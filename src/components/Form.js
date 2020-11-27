import React from "react";
import { useDispatch } from 'react-redux'
import { increment } from '../actions'

/*function Form(){}*/

// main function with all ({ props })
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const dispatch = useDispatch()

  //There I can write JS code and function

    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
      e.preventDefault();
      dispatch(increment())
      setTodos([
        ...todos, 
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    };

    
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />

        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;
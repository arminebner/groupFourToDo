import React from 'react';
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../actions'

const Todo = ({ text, todo, todos, setTodos }) => {

    const dispatch = useDispatch()
    //Events

    const deleteHandler = () => {
        //if !todo.id.completed, then decrement again, otherwise not
        if(!todo.completed) {
            dispatch(decrement())
        }
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        //if !todo.id.completed, then decrement again, otherwise not 
        setTodos(todos.map((item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                    }
                } 
        return item;
        })
        ));
        if(!todo.completed) {
            dispatch(decrement())
        } 
        else {
            dispatch(increment())
        }
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}</li> {/* In order to render text*/}
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
        </div>
        );
};


export default Todo;
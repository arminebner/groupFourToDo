import React from 'react';
//Import Components
import Todo from './Todo';

// main function with all ({ props })
const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
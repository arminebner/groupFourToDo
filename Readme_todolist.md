To-Do-List construction order.

To get started, delete in App.js:
- <header>
- import logo
Else to be deleted:
- Logo.svp
- App.test.css
- setupTests.js
To be emptied:
- #App.css


1 - already existing App.css ? If yes applying it.
2 - in index.html, almost nothing to do except eventually add font with <link></link> after meta

3 - Create new folder "components" in src folder and create 2 new files inside it:
    - Form.js
    - ToDoList.js

4 - in App.js, adding: "import React, { useState } from "react";"
    ==> UI & React update based on state

    Form.js:

5   in "const Form" and after "return", enter the <form></form> HTML
    import React & export default Form at the end of the file
    no class ==> only "className" (ctrl + F & v replace with className)

6 - Create FIRST variable:
    const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);}; ==> setting event for inputTextHandler & setInputText

    ToDoList.js:

7 - create a new component const ToDoList & return <div> HTML & "Export default ToDoList"

    App.js

8 - Enter both const components <Form /> & <TodoList /> after <header>

Files are structured
==> Getting what we type in the input bar into a piece of STATE, therefore enter: 
const [inputText, setInputText] = useState(""); // will be reset everytime

    Form.js:

9 - Enter component:      const inputTextHandler = (e) => {
                          console.log(e.target.value);
                          setInputText(e.target.value);
                          }; //setInputText ==> 1st props

How to add events? In <form> ==> <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
Every time the input changes, the const runs.

    App.js

10 - Passing down setInputText updating inputText ==>   in function App() {
                                                        const [inputText, setInputText] = useState("");
                                                        <Form setInputText={setInputText} />

==>For storing todos & adding functionality enter a new piece of STATE ==>    const [todos, setTodos] = useState([]); 
//[] because we ll enter an arry of objects

    Form.js:

11 - Enter component:     const submitTodoHandler = (e) => {
                          e.preventDefault();

And returning it in <form><button onClick={submitTodoHandler} className="todo-button" type="submit">

12 - Passing down the props "todos" and "setTodos" in <Form todos={todos} setTodos={setTodos} /> App.js
    Importing the props in const Form ({}) after setInputText. // todos & setTodos the 2nd and 3rd props

    Adding setTodos object in const submitTodoHandler and ...passing the todos: 
    { text: inputText, completed: false, id: Math.random() * 1000 } // gives a random id for the example, if not building a package.
    Updating "setInputText" right below with ("");

But "inputText" to be defined: passing down the props in <Form inputText={inputText} /> App.js and importing it in const Form ({})
// inputText ==> 4th props

Updating UI with the state, setting a value={inputText} in <form><input>


FIRST PART FINISHED


==> Create the HTML, JSX to display what we have in the todos in our state


13 - Create new doc Todo.js ==> for displaying the Todo's input bars with buttons

    TodoList.js:

14 - const TodoList parent component of new component Todo
     Create a new <Todo /> in const TodoList in <ul></ul>
     Import Todo from './Todo';

    Todo.js:

15 - Create a new const Todo = () => {}; & exporting it
     Addign the JSX: 
     return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
            <button className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
        </div>
        );
    
Problem: it doesn't react to the state yet.
==> having Piece of state with the Todos in the TodoList

    App.js:

16 - Passing down the props todos in <TodoList todos={todos} />
     Passing the props todos as argument in const TodoList

==> Maping though it, for each object we can render a Todo component
    Having access to each todo: {todos.map((todo) => ())}
    For each Todo from the state that we have ==> render out a Todo component

17 - Passing down a text props to <Todo /> ==> text={todo.text}
     Passing the props "text" in the as an attribute of component const Todo ({})
     ==> the text we enter in the main input bar is given in a Todo input bar:
     TodoList
     Todo
     Todo
     Todo
     etc.

18 - Passing a key props to <Todo /> ==> key={todo.id} 

19 - Adding todos={todos} & setTodos={setTodos} in <TodoList /> App.js so as in <Todo /> in const TodoList TodoList.js.
     Adding these props as arguments in const Todo ({}) Todo.js and const TodoList ({}) as well.
     Adding the props todo in const Todo ({}) and in <Todo /> in const TodoList TodoList.js.


IMPLEMENTING THE DELETE AND CHECK BUTTONS


    Todo.js:

20 - Adding events: setting a const deleteHandler & a const completeHandler = () => {}; and doing checks.

21 - To update the UI ==> passing these events in the Todo.js JSX as "onClick" attributes and adding classNames:

return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
        </div>



HAVING THE FILTERING SYSTEM WORK

    App.js:

22 - Create a new piece of STATE for filtering todos status: const [status, setStatus] = useState("all");
     Changing based on: ALL, COMPLETED, UNCOMPLETED

23 - Passing the state down to <Form /> App.js: setStatus={setStatus} and importing it in const Form ({})
    //setStatus ==> 5th props

    Form.js:

24 - Create a new function:     const statusHandler = (e) => {
                                setStatus(e.target.value);
                                };

25 - Passing it down in:        <div className="select">
                                    <select onChange={statusHandler} name="todos" className="filter-todo">
                                    //Event each time an item in the filter is clicked

26 - Saving the state as a props {setStatus} in const Form ({})

    App.js:

27 - Create a new piece of STATE for filter: const [filteredTodos, setFilteredTodos] = useState([]);

28 - Create a new function:     const filterHandler = () => {}
                                Add cases 'completed' 'uncomplited', 'default'

29 - Add {useEffect} after {useState} and create a new function:    useEffect(() => {
                                                                    filterHandler();
                                                                    saveLocalTodos();
                                                                    }, [todos, status]);
==> makes possible to re-run the function by adding a value in []
==> everytime "submit" is called: the function runs
==> Everytime adding a 'Todo' & 'status' changes: it runs
==> UseEffect runs filterHandler function everytime we select one of the filter options & whenever we enter a new item
==> Works in the console but not updated yet in the UI & state
==> We use <Todo /> to render each todo

30 - Passing the state filteredTodos down to <toDoList /> App.js: filteredTodos={filteredTodos} and importing it in const ToDoList ({})
     Mapping it in the component function


PUSHING & SAVING THE TODOS IN LOCAL STORAGE


31 - Create a new function: const saveLocalTodos = () => {}
     // check if localStorage has todos inside
     Adding the function saveLocalTodos(); in the useEffect function

32 - Create a new function: const getLocalTodos = () => {}
     // Copy paste of the 'if' saveLocalTodos function content part but modifying the 'else' part
==> when we save to localTodos, we save and push what we have in our state
==> when we get the localTodos, we have to check if we have stg. If not: empty [], if yes: get it and push it to the state




















     




















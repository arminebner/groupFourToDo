To-Do-List construction order.


// REACT PROJECT FILES PREPARATION


To get started, delete in App.js:
- <header>
- import logo

Else to be deleted:
- Logo.svp
- App.test.css
- setupTests.js

To be emptied:
- #App.css
- setup the doc with own css after that

In index.html:
- almost nothing to do except eventually add a font with <link></link> after meta

Create new folder "components" in src folder and create 2 new files inside it:
- Form.js
-ToDoList.js

In App.js, adding: "import React, { useState } from "react";"
==> UI & React update based on state

//GOAL: GET TODOS & INPUT & WHAT WE USE IN THE WEB APP INTO STATE.
        ONCE IN STATE: THE UI WILL REACT TO THE CHANGES: 

// CREATING BASIC FUNCTION COMPONENTS: const Form, const TodoList


    Form.js:

1   Create COMPONENT ***const Form and after "return", enter the JSX <form></form>
    import React & export default Form at the end of the file
    no class ==> only "className" (ctrl + F & v replace with className)

    ToDoList.js:

2 - Create COMPONENT ***const ToDoList & return JSX & "Export default ToDoList"

    App.js

3 - Enter both function components <Form /> & <TodoList /> in JSX after <header> ==> LIFTING UP THE STATE TO PARENT COMPOSENT APP!!

Files are structured



// ENTERING JS EVENT FUNCTIONS IN FORM
// ADDING EVENTS IN JSX INPUT
// APP: PASSING DOWN STATE SETTER setInputText AS PROPS IN JSX FORM



4 - Getting what we type in the input bar into a piece of STATE, therefore enter: 
    const [inputText, setInputText] = useState(""); // 1st & 2nd props, will be reset everytime

    Form.js:

5 - Enter JS FUNCTION:  **const inputTextHandler = (e) => {
                          console.log(e.target.value);
                          setInputText(e.target.value); //setting EVENT for inputTextHandler & setInputText
                          };

6 - Adding events: In <form> ==> <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    Every time the input changes, the function runs.

    App.js

7 - Passing down [setInputText] updating inputText in <Form /> component ==> in function App() {
                                                                            const [inputText, setInputText] = useState("");
                                                                            <Form setInputText={setInputText} />



//APP: NEW PIECE OF STATE FOR STORING TO-DOS TASKS AND FUNCTIONALITY
//APP: PASSING DOWN STATE todos, setTodos, inputText AS PROPS IN JSX FORM & TODOLIST



8 - For storing todos & adding functionality enter a new piece of STATE ==>   ***const [todos, setTodos] = useState([]); 
//[] array of objects

    Form.js:

9 - Enter JS FUNCTION: **const submitTodoHandler = (e) => {
                          e.preventDefault();

    And returning it in <form><button onClick={submitTodoHandler} className="todo-button" type="submit">

    App.js:

10 - Passing down the STATES [todos, setTodos] in component <Form todos={todos} setTodos={setTodos} /> App.js
                                                            <ToDoList todos={todos} setTodos={setTodos} /> App.js

    Importing the props in ***const Form ({}) after setInputText and in ***const ToDoList ({}). 
    // todos & setTodos the 3rd and 4th props

    Form.js:

11 - Adding setTodos object in const submitTodoHandler and ...passing the todos: 
    { text: inputText, completed: false, id: Math.random() * 1000 } // gives a random id for the example, if not building a package.
    Updating "setInputText" right below with ("");

    But "inputText" to be defined: passing down the STATE in <Form inputText={inputText} /> App.js and importing it in ***const Form ({})
    // inputText ==> 1st props

    Setting a value to the input text to keep in check with the UI, setting a value={inputText} in <form><input>


FIRST PART FINISHED


//DISPLAYING EACH TODO INPUT WITH INPUT BAR AND BUTTONS IN THE UI/STATE
//CREATING NEW FUNCTION COMPONENT: const Todo in new doc Todo.js

==> Creating the JSX to display what we have in the todos in our state, with component Todo in parent TodoList


12 - Create new doc Todo.js ==> for displaying the Todo's input bars with buttons & styling

    TodoList.js:

13 - const TodoList parent component of new component Todo
     Create a new <Todo /> in const TodoList in <ul></ul>
     Import Todo from './Todo';

    Todo.js:

14 - Create a new const Todo = () => {}; & exporting it
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



//HAVING TODO & TODOLIST COMPONENTS FUNCTIONAL



    Todo.js:

==> Maping though the array of objects, for each object we can render a Todo component
    Having access to each todo: {todos.map((todo) => ())}
    For each Todo from the state that we have ==> render out a Todo component

    ToDoList.js:

15 - Passing down a text props to <Todo /> ==> text={todo.text}
     Passing the props "text" as an attribute of component const Todo ({})
     ==> the text we enter in the main input bar is given in a Todo input bar:
     TodoList
     Todo
     Todo
     Todo
     etc.

16 - Passing a key props to <Todo /> ==> key={todo.id} for identifying every item in the list

17 - Adding setTodos={setTodos} in <TodoList /> App.js so as in <Todo /> in ***const TodoList TodoList.js.
     Adding these props as arguments in **const Todo ({}) Todo.js and **const TodoList ({}) as well.
     Adding the props todo in **const Todo ({}) and in <Todo /> in **const TodoList TodoList.js.



//IMPLEMENTING THE DELETE AND CHECK BUTTONS



    Todo.js:

18 - Adding events: setting a const deleteHandler & a const completeHandler = () => {}; and doing checks.

19 - To update the UI ==> passing these events in the Todo.js JSX as "onClick" attributes and adding classNames:

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




//HAVING THE FILTERING SYSTEM WORKING



    App.js:

20 - Create a new piece of STATE for filtering todos status: **const [status, setStatus] = useState("all");
     Changing based on: ALL, COMPLETED, UNCOMPLETED

21 - Passing the state down to <Form /> App.js: setStatus={setStatus} and importing it in const Form ({})
    //setStatus ==> 5th props

    Form.js:

22 - Create a new function:     const statusHandler = (e) => {
                                setStatus(e.target.value);
                                };

23 - Passing it down in:        <div className="select">
                                    <select onChange={statusHandler} name="todos" className="filter-todo">
                                    //Event each time an item in the filter is clicked

24 - Saving the state as a props {setStatus} in const Form ({})

    App.js:

25 - Create a new piece of STATE for filter: ***const [filteredTodos, setFilteredTodos] = useState([]);

26 - Create a new function:     const filterHandler = () => {}
                                Add cases 'completed' 'uncomplited', 'default'

27 - Add {useEffect} after {useState} and create a new function:    useEffect(() => {
                                                                    filterHandler();
                                                                    saveLocalTodos();
                                                                    }, [todos, status]);
==> makes possible to re-run the function by adding a value in []
==> everytime "submit" is called: the function runs
==> Everytime adding a 'Todo' & 'status' changes: it runs
==> UseEffect runs filterHandler function everytime we select one of the filter options & whenever we enter a new item
==> Works in the console but not updated yet in the UI & state
==> We use <Todo /> to render each todo

28 - Passing the state filteredTodos down to <toDoList /> App.js: filteredTodos={filteredTodos} and importing it in const ToDoList ({})
     Mapping it in the component function



//PUSHING & SAVING THE TODOS IN LOCAL STORAGE



29 - Create a new function: const saveLocalTodos = () => {}
     // check if localStorage has todos inside
     Adding the function saveLocalTodos(); in the useEffect function

30 - Create a new function: const getLocalTodos = () => {}
     // Copy paste of the 'if' saveLocalTodos function content part but modifying the 'else' part
     
==> when we save to localTodos, we save and push what we have in our state
==> when we get the localTodos, we have to check if we have stg. If not: empty [], if yes: get it and push it to the state




















     




















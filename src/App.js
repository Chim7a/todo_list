import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

//  STATE SECTION
const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("all");
const [filteredTodos, setFilterTodos] = useState ([]);

  //USE EFFECT

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //USE EFFECT RUNS ONCE WHEN APP STARTS.

  useEffect(() => {
    getLocalTodos();
  }, []);

// FUNCTIONS


const filterHandler = () => {
  switch (status) {
    case 'completed' :
      setFilterTodos (todos.filter(todo => todo.completed === true ))
     break; 
    case 'uncompleted' :
      setFilterTodos (todos.filter(todo => todo.completed === false ))
     break;
     default:
       setFilterTodos(todos);
       break; 
  }
}

// SAVING TO LOCAL 
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
   let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
};

  return (
    <div className="App">
    <header>
      <h1>Chima's Todo-List</h1>
    </header>

    <Form 
     inputText={inputText}
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText}
     setStatus={setStatus} 
     />

    <TodoList
    setTodos={setTodos} 
    todos={todos} 
    filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;

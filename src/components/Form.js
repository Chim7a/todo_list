import React from 'react'
import "../App.css";

const Form = ({setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        // prevents page from refresh defualt button...
        e.preventDefault();
        setTodos ([
            ...todos,
             {text: inputText, 
                completed: false, 
                id: Math.random()
            }
        ]);
        // resets the state after text has been entered...
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus (e.target.value);
    }

  return (
    <div>
    <form>
      <input 
      value={inputText} // updates the UI into the new state value(text)...
      onChange={inputTextHandler} 
      type="text" 
      className="todo-input" 
      />

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
    </div>
  )
}

export default Form;
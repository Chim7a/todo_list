import React from 'react';
import "../App.css";
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos }) => {
    console.log(todos);
  return (
    <div>
    <div className="todo-container">
      <ul className="todo-list">
    {filteredTodos.map(todo => (
        <Todo 
        setTodos={setTodos} 
        todos={todos} 
        todo={todo}
        key={todo.id} 
        text={todo.text} 
        />
    ))}
      </ul>
    </div>
    </div>
  )
}

export default TodoList
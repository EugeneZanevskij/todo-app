import React, { useState } from 'react';
import './style.css';
import TodoInput from './components/TodoInput';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function addTodo() {
    if (todo !== "") {
      setTodos([todo, ...todos]);
      setTodo("");
    }
  }
  function deleteTodo(chosen) {
    setTodos(todos.filter(todo => todo !== chosen));
  }
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <div className='todo-item'>
            <li key={index}>{todo}</li>
            <button onClick={()=>deleteTodo(todo)}>Delete</button>
          </div>
          ))}
      </ul>
    </div>
  );
}

export default App;

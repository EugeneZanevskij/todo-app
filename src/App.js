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
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
    </div>
  );
}

export default App;

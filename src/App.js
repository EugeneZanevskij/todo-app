import React, { useState } from 'react';
import './style.css';

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
      <div className="input-container">
        <input 
          className="todo-input"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="What needs to be done?" 
        />
        <button className="add-button" onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;

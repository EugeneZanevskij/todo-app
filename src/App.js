import React, { useState } from 'react';
import './style.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

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
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

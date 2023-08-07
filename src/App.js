import React, { useEffect, useState } from 'react';
import './style.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  if (storedTodos.length > 0) {
    setTodos(storedTodos);
  }
}, []);


  useEffect(() => {
    // Save todos to localStorage whenever the todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (todo !== "") {
      setTodos([todo, ...todos]);
      setTodo("");
    }
  }

  function deleteTodo(todo) {
    const updatedTodos = todos.filter((item) => item !== todo);
    setTodos(updatedTodos);
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

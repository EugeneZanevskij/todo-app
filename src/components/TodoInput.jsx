import React from 'react'

const TodoInput = ({todo, setTodo, addTodo}) => {
  return (
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
  )
}

export default TodoInput
import React from 'react'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo, index) => (
        <li className='todo-item' key={index}>
          {todo}
          <button className='todo-delete' onClick={()=>deleteTodo(todo)}>Delete</button>
        </li>
        ))}
    </ul>
  )
}

export default TodoList
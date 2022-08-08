import {useState} from 'react'

const Todo = ({todo, toggleComplete, removeTodo}) => {
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id)
  }

  const handleRemoveClick = () => {
    removeTodo(todo.id)
  }

  return  (
    <div style={{display:'flex'}}>
      <input type ='checkbox' onClick={handleCheckBoxClick}/>
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >{todo.task}</li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  )
}

export default Todo
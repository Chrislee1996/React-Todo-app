import {useState} from 'react'
import Todo from './Todo'

const TodoList = ({todos ,toggleComplete,removeTodo}) => {


  return (
    <div>
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete}
                removeTodo= {removeTodo}
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList 
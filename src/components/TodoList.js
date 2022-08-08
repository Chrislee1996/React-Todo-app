import {useState} from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        //this is for when if we entered an empty to do in our list, it will not be added or if we added a bunch of spaces, it will eliminate those spaces
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }


  return (
    <div>
        <h1>Add something to our List</h1>
        <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList
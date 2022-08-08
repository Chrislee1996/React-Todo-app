import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState({
    id:'',
    task:'',
    completed: false
  })

  const handleChange = (e) => {
    setTodo({...todo, task:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.task.trim()) {
      addTodo({...todo, id:uuidv4()})
      setTodo({...todo, task:''})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='task'
          type='text'
          value={todo.task}
          onChange={handleChange}
        />
        <button type='submit'>Add to List</button>
      </form>
    </div>
  )
}

export default TodoForm
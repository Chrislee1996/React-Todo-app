import {useState} from 'react'

const TodoForm = () => {

  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Add to List'
          value = {input}
          name='text'
          className = 'todo-input'
        />
        <button className='todo-button'>Add to List</button>
      </form>
    </div>
  )
}

export default TodoForm
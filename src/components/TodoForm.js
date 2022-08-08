import {useState} from 'react'

const TodoForm = (props) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //this will add a unique id to our to-dos
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text:input
    })

    setInput('') 

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
          onChange={handleChange}
        />
        <button className='todo-button'>Add to List</button>
      </form>
    </div>
  )
}

export default TodoForm
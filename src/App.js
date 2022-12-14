import './App.css';
// import TodoForm from './components/TodoForm';
import TodoForm from './components/TodoForm';
import { useState,useEffect } from 'react';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-app-todos'

function App() {
  const [todos, setTodos] = useState([])


  useEffect(()=> {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    console.log(localStorage)
  },[todos])


  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed:!todo.completed
          }
        }
        return todo
      })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
    <h1>Christopher's To-Do List</h1>
    <h4>Add to List</h4>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;

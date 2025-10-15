import { useState } from 'react'
import Taskform from './Components/TaskForm'
import Tasklist from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <Taskform/>
      <Tasklist/>
      <Progresstracker/>
      <button>Clear all tasks</button>
    </div>
    </>
  )
}

export default App

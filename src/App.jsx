import { useState,useEffect} from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'
import './App.css'


function App() {
  const[tasks,setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  })
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  return (
    <>
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist/>
      <Progresstracker/>
      <button>Clear all tasks</button>
    </div>
    </>
  )
}

export default App

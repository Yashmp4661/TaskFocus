import { useState,useEffect} from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/TaskList'
import Progresstracker from './Components/Progresstracker'
import './style.css'


function App() {
  const[tasks,setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  })
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }


  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTasks = () =>
  {
    setTasks([]);
  }

  return (
    <>
    <div className="main">
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks} />

      {tasks.length>0 && 
      (<button className="clear" onClick={clearTasks}>Clear all tasks</button>)}
      
    </div>
    </>
  )
}

export default App

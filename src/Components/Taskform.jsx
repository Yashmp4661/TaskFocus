import { useState } from "react";

function Taskform({addTask}) {
    const[task,setTask] = useState('');
    const[priority,setPriority] = useState('medium');
    const[category,setCategory] = useState('general');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask({text: task,priority,category,completed: false});

        setTask('');
        setPriority('medium');
        setCategory('general');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={task} placeholder="Enter the task"  onChange={(e)=> setTask(e.target.value)} />
                    <button  type="submit"> Add Task</button>
                    <h1>{task} {priority} {category}</h1>
                </div>
                <div>
                    <select value= {priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>


                    <select value = {category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="general">General</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Taskform;
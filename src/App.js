import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const  App =() =>{
const [tasks,setTasks] = useState([]) ; 

useEffect(()=>{
  const getTasks = async ()=>{
    const tasksFromServer = await fetchTasks();
    setTasks(tasksFromServer);

  }
  getTasks();
},[])

//fetch tasks
const fetchTasks= async()=>{
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();
 return data;

}

const addNewTask= async (task)=>{
const res  = await fetch("http://localhost:5000/tasks",{
method:'POST',
headers:{
  "Content-Type": "application/json"
},
//stringify the value
body: JSON.stringify(task)
})

const data = await res.json();
//update the task state with initial values  and  new values data
setTasks([...tasks, data])

}


  return (
    <div className="container">
    <Header/>
    <AddTask addTask={addNewTask}/>
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

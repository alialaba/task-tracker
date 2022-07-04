import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const  App =() =>{
const [tasks,setTasks] = useState([]) ; 
const [showOnAdd, setShowOnAdd] = useState(false);

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

//fetch task
const fetchTask= async(id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
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
//Toggle reminder1
const toggleReminder = async(id)=>{

 const taskToToggle = await fetchTask(id);
 //toggle task to reminder and set it to opposite of the initial boolean value
 const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

 const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  method:"PUT",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(updateTask)
 })
const data = await res.json();

//task.id equal id return obj task and update the json reminder value
setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:data.reminder}: task))

}
// delete task 
const deleteTask= async (id)=>{
 
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method:"DELETE"
  })
  //return tasks that are not equal to id clicked
  setTasks(tasks.filter((task)=> task.id !== id))

}
  return (
    <div className="container">
    <Header onShow={showOnAdd}  showAdd={()=>setShowOnAdd(!showOnAdd)}/>
   {showOnAdd &&  <AddTask addTask={addNewTask} />}
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;

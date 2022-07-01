import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks"
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


  return (
    <div className="container">
    <Header/>
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;

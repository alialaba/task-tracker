import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

function App() {
  const [tasks,setTasks] =useState(   [
    {id:1, text:"code", day:2021-12-1, reminder:true},
    {id:2, text:"Learn", day:2021-10-1, reminder:true},
    {id:3, text:"code", day:2022-12-1, reminder:false}

  ])

  
  return (
    <div className="container">
     Hello World
    </div>
  );
}

export default App;

import { useState } from "react";
const AddTask =({addTask})=>{
    const [formData, setFormData] = useState({
        text:"",
        day:"",
        reminder:true

    })

    const handleChange=(event)=>{
        const {name, value, type, checked, } = event.target
        setFormData(initialFormData=> {
            return{
                ...initialFormData,
                [name]:type === "checkbox" ? checked : value 
            }
        });

    }

    const handleSubmit=(event)=>{
        event.preventDefault();
   if(!formData.text){
    alert("Please enter the input field")
    return;
}
addTask(formData)
setFormData({ text:"",
day:"",
reminder:true
})
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Task"
                name="text"
                value={formData.text}
                onChange={handleChange}
                />

            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                type="text" 
                placeholder="Day & Time"
                name="day"
                value={formData.day}
                onChange={handleChange}
                />

            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input 
                id="reminder"
                type="checkbox" 
                name="reminder"
                checked={formData.reminder}
                onChange={handleChange}

                />
            </div>
            <input type="submit" value="Add Task"  className="btn btn-block"/>
            
        </form>
    );
}
export  default AddTask;
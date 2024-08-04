import { useState } from 'react'

function ToDoList(){


    const [tasks,setTasks] = useState([]);
    const [taskname,setTaskname] = useState("");

    function addTask(){
     
        if(taskname.trim() !== ""){

            const newTask = { task: taskname  }
            
            setTasks(t => [...t,newTask]);
            
            setTaskname("");
        }
    }
    function removeTask(index){

        setTasks(tasks.filter((_,f) => f !== index ));
    }
    function taskUpper(index){
        if (index > 0 && index < tasks.length) {
            const newTasks = [...tasks];
            const removedTask = newTasks.splice(index, 1)[0];
            newTasks.splice(index - 1, 0, removedTask);
            setTasks(newTasks);
        }
        
    }
    function taskDown(index){
        if (index >= 0 && index < tasks.length) {
            const newTasks = [...tasks];
            const removedTask = newTasks.splice(index, 1)[0];
            newTasks.splice(index + 1, 0, removedTask);
            setTasks(newTasks);
        }
        
    }


    return(
        <div className='to-do-list' >
            
          <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder='Enter A task' value={taskname} onChange={(event)=>{setTaskname(event.target.value)}}/>
                 <button className='add-btn' onClick={addTask} >Add</button>
                    <ol>
                        {tasks.map((newtask,index)=>
                        <li key={index}> 
                            
                            <span className='text' >{newtask.task}</span>

                            <button className='clear-btn' onClick={() => removeTask(index)} >clear</button>
                            <button className='moveUp-btn' onClick={()=> taskUpper(index)} >Move Up</button>
                            <button className='moveDown-btn' onClick={()=> taskDown(index)} >Move Down</button>
                        </li>)}
                   </ol>
            </div>
        </div>
    )
}
export default ToDoList;
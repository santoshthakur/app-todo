import React from "react";
import { useState,useEffect } from "react";
import TaskList from "./TaskList";
interface newtodoType{
    topic:string,
    isCompleted:boolean
}

const CreateTaskForm= ()=>{
    const [initialTask, setInitialTask]= useState<Array<newtodoType>>([])
    const [upNewTask, setupNewTask]= useState<string>("");
    const handleNewInput= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setupNewTask(e.target.value);
    }
    const handleAddTask= ()=>{
       if(upNewTask !== ''){
       // alert('Clicked Submit')
       setInitialTask (t =>[...t, {topic :upNewTask,isCompleted:false} ])
       setupNewTask("");
       }
    }
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTask()
        }
      }
    return(
        <>
        <div className="flex w-full mb-3">
            <input type="text" className="border-inherit border px-2 grow" placeholder="Create new task" value={upNewTask} onKeyDown={handleKeyDown} onChange={handleNewInput}    />
            <button className="bg-blue-700 text-white text-sm p-2 rounded-sm" onClick={handleAddTask}>
            Submit
            </button> 
        </div>
            <ul className="list-none m-0 p-0">
            {initialTask.map((task,index)=>
            <TaskList  key={index} topic= {task.topic} isCompleted={false} />
            )}
            
            </ul>
        </>

    )
}

export default CreateTaskForm;
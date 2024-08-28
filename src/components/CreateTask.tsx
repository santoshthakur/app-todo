import React, { useContext } from "react";
import { useState,useEffect } from "react";
import { TodoType } from "./Addtodo";
import { TaskContext } from "./TaskProvider";
interface ICreatTask{
}
const CreateTask:React.FC<ICreatTask>=()=>{

  const {setTasks} = useContext(TaskContext); 
    const [newTask, setNewTask] = useState<string>("");
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
      }
      const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          addTask();
        }
      };
      function addTask() {
        if (newTask !== "") {
          setTasks((t:Array<TodoType>) => [...t, { topic: newTask, isCompleted: false }]);
          setNewTask("");
        }
      }
      
    return(
        <div className="flex w-full mb-3">
        <input
          type="text"
          className="border-inherit border px-2 grow"
          placeholder="Create new task"
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-700 text-white text-sm p-2 rounded-sm"
          onClick={addTask}
        >
          Submit
        </button>
      </div>
    )
}

export default CreateTask
import React from "react";
// import { useState,useEffect } from "react";
interface newTodoType{
    topic:string,
    isCompleted:boolean
}

const TaskList:React.FC<newTodoType>= ({topic,isCompleted})=>{

    return(
       <li  className="bg-gray-300 p-3 mb-3">
        <div className="flex items-cener py-2 items-center">
            <div>
                <input  type="checkbox" checked={isCompleted} className="w-4 h-4 mr-3" />
                {topic}  
            </div>
            <span className="grow"></span>
            <div>
            <button   className="bg-gray-400 text-white text-sm p-2 mr-3 rounded-sm">
                    Edit
                </button>
         
                <button  className="bg-amber-700 text-white text-sm p-2 rounded-sm">
                    Detele
                </button>
            </div>
        </div>
            </li>

        
    )
}

export default TaskList;
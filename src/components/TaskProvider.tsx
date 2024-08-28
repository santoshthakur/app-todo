import React, { createContext, useState } from "react";
import { TodoType } from "./Addtodo";

export const TaskContext = createContext<{
  setTasks: any;
  tasks: Array<TodoType>;
}>({ setTasks: () => {}, tasks: [] });

interface ITaskProvider {
  children: any;
}
const TaskProvider: React.FC<ITaskProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Array<TodoType>>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;

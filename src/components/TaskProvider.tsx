import React, { createContext, ReactNode, useState } from "react";
import { TodoType } from "./AddTodo";

export const TaskContext = createContext<{
  setTasks: React.Dispatch<React.SetStateAction<TodoType[]>>;
  tasks: TodoType[];
}>({ setTasks: () => {}, tasks: [] });

interface ITaskProvider {
  children: ReactNode;
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

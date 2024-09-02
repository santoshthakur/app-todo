import React, { useEffect, useContext } from "react";
import CreateTaskForm from "./CreateTaskForm";
import TodoItems from "./TodoItems";
import { TaskContext } from "./TaskProvider";
export interface TodoType {
  topic: string;
  isCompleted: boolean;
}

const AddTodo: React.FC = () => {
  const { tasks } = useContext(TaskContext);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <CreateTaskForm />
      <TodoItems />
    </>
  );
};

export default AddTodo;

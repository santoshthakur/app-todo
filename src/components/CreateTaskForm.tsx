import React from "react";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "./TaskProvider";
// import TaskList from "./TaskList";
import TodoItems from "./TodoItems";
interface newtodoType {
  topic: string;
  isCompleted: boolean;
}

const CreateTaskForm = () => {
  const { setTasks } = useContext(TaskContext);
  const [upNewTask, setupNewTask] = useState<string>("");
  const handleNewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setupNewTask(e.target.value);
  };
  const handleAddTask = () => {
    if (upNewTask !== "") {
      // alert('Clicked Submit')
      setTasks((t: newtodoType[]) => [
        ...t,
        { topic: upNewTask, isCompleted: false },
      ]);
      console.log("Clicked Function");
      setupNewTask("");
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
      <div className="flex w-full mb-3">
        <input
          type="text"
          className="border-inherit border px-2 grow"
          placeholder="Create new task"
          value={upNewTask}
          onKeyDown={handleKeyDown}
          onChange={handleNewInput}
        />
        <button
          className="bg-blue-700 text-white text-sm p-2 rounded-sm"
          onClick={handleAddTask}
        >
          Submit New
        </button>
      </div>
    </>
  );
};

export default CreateTaskForm;

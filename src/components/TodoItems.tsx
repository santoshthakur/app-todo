import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskProvider";
import { TodoType } from "./Addtodo";
interface ITodoItems {}

const TodoItems: React.FC<ITodoItems> = () => {
  const { setTasks, tasks } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number | null>(null);
  const [editTaskInput, setEditTaskInput] = useState<string>("");
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((data, i) => i !== index));
  };
  const editTask = (index: number, currentTask: TodoType) => {
    console.log(currentTask.isCompleted);
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setEditTaskInput(currentTask.topic);
    // else {
    //   alert(`Can't edit this task because task Has been completed.`)
    // }
    // alert(`Edit item ${currentTask.topic} ${index}`)
  };
  const taskStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: e.target.checked } : task
    );
    setTasks(updatedTasks);
  };
  const saveEditedTask = () => {
    if (currentTaskIndex !== null && editTaskInput !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === currentTaskIndex ? { ...task, topic: editTaskInput } : task
      );
      setTasks(updatedTasks);
      cancelEditing();
    }
  };
  const cancelEditing = () => {
    setIsEditing(false);
    setCurrentTaskIndex(null);
    setEditTaskInput("");
  };
  const handleEditInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditTaskInput(event.target.value);
  };
  return (
    <>
      <ul className="list-none m-0 p-0">
        {tasks.map((task, index) => (
          <li className="mb-3 border-b">
            <div className="flex items-cener py-2 items-center">
              <div>
                <input
                  key={index}
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={(e) => taskStatus(e, index)}
                  className="w-4 h-4 mr-3"
                />
                {task.topic}
              </div>
              <span className="grow"></span>
              <div>
                {task.isCompleted === false && (
                  <button
                    className="bg-gray-400 text-white text-sm p-2 mr-3 rounded-sm"
                    onClick={() => editTask(index, task)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="bg-amber-700 text-white text-sm p-2 rounded-sm"
                  onClick={() => deleteTask(index)}
                >
                  Detele
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div>
          <h1 className="text-2xl text-cyan-800">
            You are Editing : <strong>{editTaskInput}</strong>
          </h1>
          <div className="edit-modal">
            <input
              type="text"
              value={editTaskInput}
              onChange={handleEditInputChange}
              className="border-inherit border p-2"
            />
            <button
              className="bg-green-500 text-white text-sm p-2 rounded-sm"
              onClick={saveEditedTask}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white text-sm p-2 rounded-sm"
              onClick={cancelEditing}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItems;

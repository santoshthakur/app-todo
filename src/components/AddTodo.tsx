import React, { useState, useEffect } from "react";
interface todoType {
  topic: string;
  isCompleted: boolean;
}

const AddTodo = () => {
  const [tasks, setTasks] = useState<Array<todoType>>(
    JSON.parse(localStorage.getItem("todoList") || "[]")
  );
  const [newTask, setNewTask] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number | null>(null);
  const [editTaskInput, setEditTaskInput] = useState<string>("");
  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask !== "") {
      setTasks((t) => [...t, { topic: newTask, isCompleted: false }]);
      setNewTask("");
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((data, i) => i !== index));
  };
  const editTask = (index: number, currentTask: todoType) => {
    console.log(currentTask.isCompleted);
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setEditTaskInput(currentTask.topic);
    // else {
    //   alert(`Can't edit this task because task Has been completed.`)
    // }
    // alert(`Edit item ${currentTask.topic} ${index}`)
  };

  const handleEditInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditTaskInput(event.target.value);
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

  const taskStatus = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompleted: e.target.checked } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <>
      {/* <CreateTaskForm /> */}
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
      <ul className="list-none m-0 p-0">
        {tasks.map((task, index) => (
          <li key={index} className="mb-3 border-b">
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
            {" "}
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

export default AddTodo;

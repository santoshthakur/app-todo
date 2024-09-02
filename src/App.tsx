import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
// import Listitem from './components/Listitem';
import AddTodo from "./components/AddTodo";
import TaskProvider from "./components/TaskProvider";

function App() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="min-w-[600px] m-auto bg-white rounded-lg p-4 min-h-48">
        <Header />
        <TaskProvider>
          <AddTodo />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;

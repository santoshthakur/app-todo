import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import Listitem from './components/Listitem';
import Addtodo from './components/Addtodo';
import Home from './Home';
import TaskProvider from './components/TaskProvider';

function App() {
   return (
   <div className='flex justify-center items-center flex-col'>
     {/* <div className='p-10'>
 
      </div> */}
  
  <div className='min-w-[600px] m-auto bg-white rounded-lg p-4 min-h-48'>
  <Header />
  {/* <Home /> */}
  <TaskProvider>
  <Addtodo />
  </TaskProvider>
  </div>
  </div>
  );
}

export default App;

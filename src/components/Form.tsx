import React from "react";

const Form =()=>{
    return(
        <>
        <form className="form">
        <div className="flex w-full mb-3">

        <input
          type="text"
          name="todo"
          id="todo"
          className="border-inherit border p-2 grow" placeholder="Write your next task"
        />
      <button>
        <span className="bg-red-700 text-white text-sm p-2 rounded-sm">Submit</span>
      
      </button>
      </div>

    </form>
        </>
    )
}

export default Form;
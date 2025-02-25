import { useState } from "react";
import axios from "axios";

function Input() {
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const taskData = {
      title,
      description,
      importflag: 0, 
    };

    try {
      const response = await axios.post("http://localhost:3000/api/createTask", taskData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Task added successfully!");
        window.location.reload();
        setTitle(""); // Clear the input fields
        setDescription("");
      } else {
        alert("Failed to add task");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the task.");
    }
  };

  return (
    <section className="items-center px-8 sm:px-20 pt-4 border bg-white/30 backdrop-blur-md border-white/20 sm:h-[85vh] h-[40vh] rounded-lg drop-shadow-xl shadow-2xl mt-2 pb-4 overflow-y-scroll">
      <div className="heading">
        <h1 className="text-black sm:text-2xl text-lg font-bold font-serif">Add a Task</h1>
      </div>
      <form onSubmit={handleSubmit}> 
        <div className="input-field sm:mt-10 mt-2">
          <div className="label">
            <label className="text-black sm:text-lg text-sm font-serif font-semibold">Title</label>
          </div>
          <div className="input mt-2">
            <input
              className="rounded-lg border-gray-400 sm:py-2 py-2 sm:w-[25rem] w-[18rem] pl-2 shadow-lg sm:text-lg text-sm"
              type="text"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
        </div>

        <div className="input-field sm:mt-10 mt-2">
          <div className="label">
            <label className="text-black sm:text-lg text-sm font-serif font-semibold">Description</label>
          </div>
          <div className="input mt-2">
            <textarea
              className="rounded-lg border-gray-400 sm:py-2 py sm:w-[25rem] w-[18rem] pl-2 sm:h-24 h-12 shadow-lg sm:text-lg text-sm"
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
        </div>

        <div className="btn flex justify-end w-[18rem] sm:mt-10 mt-2 sm:w-[25rem]">
          <button
            className="px-8 py-1 bg-black text-white rounded-lg hover:bg-white hover:border-black hover:border hover:text-black sm:text-lg text-sm"
            type="submit" 
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

export default Input;

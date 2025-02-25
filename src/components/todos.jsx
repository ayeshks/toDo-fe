import { useState, useEffect } from "react";
import 'primeicons/primeicons.css';
import axios from "axios";

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/visibleTask");
        setTasks(response.data); // Set tasks data to state
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Handle the "Done" button click
  const handleDone = async (taskId) => {
    try {
      // Make a PUT request to update the importflag of the task
      await axios.put(`http://localhost:3000/api/invisibleTask/${taskId}`);
      
      // After the task is updated, reload the page to reflect changes
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <section className="items-center px-8 sm:px-20 pt-4 border bg-white/30 backdrop-blur-md border-white/20 sm:h-[85vh] h-[40vh] rounded-lg drop-shadow-xl shadow-2xl mt-2 pb-2 overflow-y-scroll">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <i className="pi pi-spin pi-spinner text-4xl text-gray-500"></i> {/* PrimeIcons spinner */}
        </div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card w-full py-2 px-4 bg-white/30 border-black border backdrop-blur-md rounded-lg mb-2">
            <h1 className="title text-black text-lg font-serif font-bold">
              {task.title}
            </h1>
            <div className="description w-full h-8 overflow-y-scroll">
              <span className="text-gray-500 text-md font-serif">
                {task.description}
              </span>
            </div>

            <div className="done flex justify-end w-full mt-2 gap-2 hover:text-black">
              <button
                className="flex items-center gap-2 px-8 py-1 rounded-lg bg-black text-white hover:text-black hover:bg-white hover:border-black hover:border hover:rounded-lg sm:text-lg text-sm"
                onClick={() => handleDone(task.id)} 
              >
                <i className="pi pi-check-circle sm:text-lg text-sm "></i>
                Done
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default Todos;

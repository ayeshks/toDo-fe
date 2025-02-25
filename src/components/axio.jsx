import { useState, useEffect } from "react";
import 'primeicons/primeicons.css'
import axios from "axios"

function Todos() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/visibleTask"); // Use axios to fetch tasks
        setTasks(response.data); // Set the response data to state
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTasks();
  }, []); 

  return (


    <div className="test axios">
      {tasks.length >0 ? (
        tasks.map((task, index) =>(
          <div key={index} className="main">
           <h1 className="text-black">
                  {task.title}
            </h1>
           <h1 className="text-black">
               {task.description}
           </h1>    
          </div>
        )
        )
      ):(
        <div className="p">no data</div>
      )}
    </div>
  );
}

export default Todos;

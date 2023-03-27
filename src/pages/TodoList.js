import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //   fetch("/recipes")
    //     .then((r) => r.json())
    //     .then(setTasks);
    // }, []);
  

    return ( 
        <>
        <div className="flex flex-col items-center justify-center h-screen">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="my-4 p-4 bg-white rounded-md shadow-md w-96">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-lg font-bold">{task.title}</h2>
                    <p className="text-gray-700 mt-2">{task.description}</p>
                  </div>
                  <div className="flex flex-col text-right">
                    <p className="text-gray-600">{task.status}</p>
                    <p className="text-gray-600">{task.priority}</p>
                    <button >Delete</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold mb-4">No tasks found</h2>
              <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700">
                <Link to="/new">Make a new task</Link>
              </button>
            </div>
          )}
        </div>
      </>
      
     );
}
 
export default TodoList;
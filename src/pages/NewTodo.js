import { useState } from "react";
import { useNavigate} from "react-router-dom"

const NewTodo = ({user}) => {
 
    const [title, setTitle] = useState("Work out");
    const [description, setDescription] = useState(`I want to work out from 6am to 7am.`);
    const [status, setStatus] = useState([]);
    const [priority, setPriority] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const navigate = useNavigate()

  
    return ( 
<div className="flex flex-col justify-center md:flex-row">
  <div className="w-full md:w-1/3 md:pr-4">
    <h2 className="text-lg font-medium mb-1 text-center">Create Task</h2>
    <form className="shadow-xl rounded-xl p-4">
      <div className="mb-2">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          rows="3"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="status" className="block text-gray-700 font-medium mb-2">Status</label>
        <input
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="priority" className="block text-gray-700 font-medium mb-2">Priority</label>
        <input
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          {isLoading ? "Loading..." : "Submit Task"}
        </button>
      </div>
      <div>
        {errors.map((err) => (
          <span key={err} className="text-red-500 block mb-2">{err}</span>
        ))}
      </div>
    </form>
  </div>
  <div className="w-full md:w-1/2 md:pl-4">
    <h1 className="text-xl font-medium mb-2">{title}</h1>
    <p className="text-gray-500 mb-4">
      <em>Priority: {priority}</em>
      <span className="mx-2">·</span>
      <cite>Status: {status}</cite>
    </p>
    <p className="text-gray-700">{description}</p>
  </div>
</div>

     );
}
 
export default NewTodo;
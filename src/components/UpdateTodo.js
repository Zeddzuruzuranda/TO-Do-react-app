import React, { useState } from 'react';

function UpdateTodo({ todo, onUpdateTodo }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const [priority, setPriority] = useState(todo.priority);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTodo = {
      ...todo,
      title,
      description,
      status,
      priority
    };
    onUpdateTodo(updatedTodo);
  }

  return (
    <div>
      <h2>Update Todo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        <br />
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

export default UpdateTodo;

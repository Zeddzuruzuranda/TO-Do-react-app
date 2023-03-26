import React, { useState } from 'react';

function ListAllTodo({ todos }) {
  const [filter, setFilter] = useState({
    date: '',
    priority: '',
    status: ''
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      [name]: value
    });
  }

  const filteredTodos = todos.filter(todo => {
    return (
      (filter.date === '' || filter.date === todo.date) &&
      (filter.priority === '' || filter.priority === todo.priority) &&
      (filter.status === '' || filter.status === todo.status)
    );
  });

  const todoRows = filteredTodos.map(todo => (
    <tr key={todo.id}>
      <td>{todo.title}</td>
      <td>{todo.date}</td>
      <td>{todo.priority}</td>
      <td>{todo.status}</td>
    </tr>
  ));

  return (
    <div>
      <h2>Todos</h2>
      <div>
        <label>
          Filter by date:
          <select name="date" value={filter.date} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
        </label>
        <label>
          Filter by priority:
          <select name="priority" value={filter.priority} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Filter by status:
          <select name="status" value={filter.status} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoRows}
        </tbody>
      </table>
    </div>
  );
}

export default ListAllTodo;

import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    // Perform login logic using username and password values
  }

  const handleRegister = () => {
    // Redirect to the registration page
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default LoginPage;



import React, { useState } from 'react';

function Register({ goToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <button onClick={goToLogin}>Go to Login</button>
    </div>
  );
}

export default Register;


import React, { useState } from 'react';

function DeleteTodo({ todo, onDelete }) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
  }

  const handleConfirm = () => {
    setIsConfirming(true);
  }

  const handleCancel = () => {
    setIsConfirming(false);
  }

  const confirmContent = (
    <div>
      <p>Are you sure you want to delete this Todo?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );

  const content = (
    <div>
      <p>{todo.title}</p>
      <button onClick={handleConfirm}>Delete</button>
    </div>
  );

  return (
    <div>
      {isConfirming ? confirmContent : content}
    </div>
  );
}

export default DeleteTodo;


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

import React, { useState } from 'react';

function AddTodoPage({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      title,
      description,
      priority
    };
    onAddTodo(newTodo);
    setTitle('');
    setDescription('');
    setPriority('low');
  }

  return (
    <div>
      <h2>Add Todo</h2>
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
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoPage;

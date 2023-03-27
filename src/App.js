import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import DeleteTodo from './components/DeleteTodo';
import UpdateTodo from './components/UpdateTodo';
import ListAllTodo from './components/ListAllTodo';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Finish project', description: 'Finish the React project by next week', status: 'in-progress', priority: 'high' },
    { id: 2, title: 'Buy groceries', description: 'Buy milk, eggs, and bread for breakfast tomorrow', status: 'todo', priority: 'medium' },
    { id: 3, title: 'Schedule dentist appointment', description: 'Call the dentist to schedule an appointment for next month', status: 'done', priority: 'low' }
  ]);

  const handleLogin = () => {
    setCurrentPage('todos');
  }

  const handleRegister = () => {
    setCurrentPage('register');
  }

  const handleGoToLogin = () => {
    setCurrentPage('login');
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  }

  let content = null;

  switch (currentPage) {
    case 'login':
      content = <LoginPage onLogin={handleLogin} onRegister={handleRegister} />;
      break;
    case 'register':
      content = <Register onGoToLogin={handleGoToLogin} />;
      break;
    case 'todos':
      content = <ListAllTodo todos={todos} filter={filter} onFilterChange={handleFilterChange} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleUpdateTodo} />;
      break;
    default:
      content = <LoginPage onLogin={handleLogin} onRegister={handleRegister} />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default App;

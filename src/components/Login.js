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

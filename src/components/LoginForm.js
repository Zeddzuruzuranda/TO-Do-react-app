import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation
    const user = { username, password };
    if (username === "admin" && password === "admin") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onLogin(user);
      }, 2000);
    } else {
      setErrors(["Invalid username or password"]);
    }
  };

  return (
    <>
      <div className="flex justify-center  ">
        <form className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2 text-center">Login</h2>
          <div className="mb-2">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center mt-3 justify-between">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <Link to="/signup" className="text-pink-700 font-bold hover:text-pink-500">
              Sign Up
            </Link>
          </div>
          <div>
            {errors.map((err) => (
              <span key={err} className="text-red-500">
                {err}
              </span>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;

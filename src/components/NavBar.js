import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

function NavBar({ user, setUser }) {
  const [darkMode, setDarkMode] = useState(false);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleDarkModeToggle() {
    setDarkMode((prevMode) => !prevMode);
  }

  const navBarClasses = `flex justify-center items-center p-4 ${
    darkMode ? "bg-gray-800" : "bg-slate-"
  }`;
  const linkClasses = `bg-yellow-200 py-3 px-4 font-bold rounded-md ${
    darkMode ? "text-gray-700" : "text-gray-900"
  }`;

  return (
    <header className={navBarClasses}>
      <h1 className={`font-bold text-3xl text-pink-700 m-0 leading-1 ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
        <Link to="/">TO-DO APP</Link>
      </h1>
      <nav className="flex gap-4 absolute right-8">
        <Link to="/new" className={linkClasses}>
          New Task
        </Link>
        <Link to="/" className={linkClasses} onClick={handleLogoutClick}>
          Logout
        </Link>
        <button
          className={`${linkClasses} ${
            darkMode ? "bg-gray-900" : "bg-gray-200"
          }`}
          onClick={handleDarkModeToggle}
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>
    </header>
  );
}

export default NavBar;

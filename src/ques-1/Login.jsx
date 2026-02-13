import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div className="page">
      
      <header className="header">
        <h1>My React App</h1>
      </header>
 
      <main className="main">
        <h2>
          {isLoggedIn ? "Welcome back " : "Please log in "}
        </h2>

        <p className="description">
          {isLoggedIn
            ? "You are logged in and can access all features."
            : "Log in to continue and explore the application."}
        </p>

        <button className="btn" onClick={toggleLogin}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
      </main>
 
      <footer className="footer">
        <p> 2026 My React App</p>
      </footer>
    </div>
  );
}

export default Login;

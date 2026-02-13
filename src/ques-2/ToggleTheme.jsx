import React, { createContext, useContext, useState, useMemo } from "react";
import { Sun, Moon, Lock, User } from "lucide-react";
import "./App.css";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};


const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

const LoginForm = () => {
  return (
    <div className="login-page">
      <ThemeToggler />

      <div className="login-card">
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Please enter your details</p>
        </div>

        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <div className="input-group">
            <User size={18} />
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input type="password" placeholder="Password" />
          </div>

          <button className="login-btn">Sign In</button>
        </form>

        <div className="forgot">
          <button>Forgot password?</button>
        </div>
      </div>
    </div>
  );
};

const ToggleTheme =()=> {
  return (
    <ThemeProvider>
      <LoginForm />
    </ThemeProvider>
  );
}

export default ToggleTheme  ; 

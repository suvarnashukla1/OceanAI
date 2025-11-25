import React, { useState } from "react";
import "./App.css";
import Home from "./Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="page">
      <div className="login-box">

        <h1 className="title">Login</h1>

        <div className="field">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="field">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>

        <p className="register-text">
          Don't have an account? <a href="#">Register</a>
        </p>

      </div>
    </div>
  );
};

export default App;

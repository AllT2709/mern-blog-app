import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./register.css";
import { register } from "../../../services/auth.services";

export default function Register() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    register(user)
      .then((newUser) => {
        window.location.replace("/login");
      })
      .catch((err) => {
        setError(true);
      });
  };
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="register-input"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="register-input"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="register-input"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="register-button">Register</button>
      </form>
      <button href="#" className="register-login_button">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{ color: "red" }}>Somethin went wrong!</span>}
    </div>
  );
}

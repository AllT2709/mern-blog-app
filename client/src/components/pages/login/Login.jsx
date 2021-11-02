import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";
import { loginStart, loginSuccess } from "../../../actions/user";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.user.isFetching);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    dispatch(
      loginSuccess({
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
    );
  };
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          className="login-input"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="login-input"
          ref={passwordRef}
        />
        <button className="login-button" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button href="#" className="login-register_button">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";

export default function App() {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/write">
          {user ? <Write /> : <Redirect to="/login" />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Redirect to="/login" />}
        </Route>
        <Route path="/post/:id">
          {user ? <Single /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

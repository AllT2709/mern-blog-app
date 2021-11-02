import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./navBar.css";
import { logout } from "../../actions/user";

const pf = "http://localhost:3000/images";
const initImg =
  "https://pbs.twimg.com/profile_images/1064544692707172354/LuZuUIkr_400x400.jpg";

export default function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-left_icon fab fa-facebook-square"></i>
        <i className="top-left_icon fab fa-twitter-square"></i>
        <i className="top-left_icon fab fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list_item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="top-list_item">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="top-list_item">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="top-list_item">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="top-list_item" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link to="/settings">
            <img
              className="top-image"
              src={user.profilePic ? `${pf}/${user.profilePic}` : initImg}
              alt="image profile"
            />
          </Link>
        ) : (
          <ul className="top-list">
            <li className="top-list_item">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="top-list_item">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="top-search_icon fas fa-search"></i>
      </div>
    </div>
  );
}

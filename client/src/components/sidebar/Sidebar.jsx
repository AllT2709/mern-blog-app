import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
import { getCategories } from "../../services/categories.services";

export default function Sidebar() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCat(data);
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/7078049/pexels-photo-7078049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250"
          alt="image"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quisquam
          ea alias sint ut natus esse sequi?.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          {cat.map((c) => (
            <Link key={c._id} to={`/?category=${c.name}`} className="link">
              <li className="sidebar-list_item">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title_sm">React & Node</span>
        <span className="header-title_lg">Blog</span>
      </div>
      <img
        className="header-img"
        src="https://images.pexels.com/photos/9651396/pexels-photo-9651396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="image"
      />
    </div>
  );
}

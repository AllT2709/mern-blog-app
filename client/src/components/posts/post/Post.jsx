import React from "react";
import { Link } from "react-router-dom";

import "./post.css";

export default function Post({ post }) {
  const pf = "http://localhost:3000/images";
  return (
    <div className="post">
      {post.photo && (
        <img className="post-image" src={`${pf}/${post.photo}`} alt="image" />
      )}
      <div className="post-info">
        <div className="post-cats">
          {post.categories.map((c) => (
            <span className="post-cat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className="post-desc">{post.desc}</p>
      </div>
    </div>
  );
}

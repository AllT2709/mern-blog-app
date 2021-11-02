import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./singlePost.css";
import {
  getPost,
  deletePost,
  putPost,
} from "../../../../services/posts.services";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const pf = "http://localhost:3000/images";

  useEffect(() => {
    getPost(id).then((post) => {
      setPost(post);
    });
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id, user.username);
    window.location.replace("/");
  };

  const handleUpdate = async () => {
    await putPost(id, {
      username: user.username,
      title: post.title,
      desc: post.desc,
    });
    setUpdateMode(false);
  };

  return (
    <div className="single-post">
      <div className="single-post_wrapper">
        {post.photo && (
          <img
            src={`${pf}/${post.photo}`}
            alt="image"
            className="single-post_img"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={post.title}
            className="single-post_title_input"
            autoFocus
            onChange={({ target }) => setPost({ ...post, title: target.value })}
          />
        ) : (
          <h1 className="single-post_title">
            {post.title}
            {post.username === user?.username && (
              <div className="single-post_edit">
                <i
                  className="single-post_icon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-post_icon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="single-post_info">
          <span className="single-post_author">
            Author:
            <Link to={`/?username=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post_date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <>
            <textarea
              className="single-post_desc_input"
              onChange={({ target }) =>
                setPost({ ...post, desc: target.value })
              }
              value={post.desc}
            />
            <button className="single-post_button" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <p className="single-post_desc">{post.desc}</p>
        )}
      </div>
    </div>
  );
}

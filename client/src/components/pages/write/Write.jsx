import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./write.css";
import { addPost, upload } from "../../../services/posts.services";

export default function Write() {
  const user = useSelector((state) => state.user.user);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    file: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: post.title,
      desc: post.desc,
    };
    if (post.file) {
      const data = new FormData();
      const filename = Date.now() + post.file.name;
      data.append("name", filename);
      data.append("file", post.file);
      newPost.photo = filename;
      try {
        upload(data);
      } catch (error) {}
    }
    addPost(newPost).then((res) => {
      window.location.replace(`/post/${res._id}`);
    });
  };
  return (
    <div className="write">
      {post.file && (
        <img
          className="write-img"
          src={URL.createObjectURL(post.file)}
          alt="image"
        />
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form_group">
          <label htmlFor="fileInput">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={({ target }) =>
              setPost({ ...post, file: target.files[0] })
            }
          />
          <input
            type="text"
            placeholder="title"
            className="write-input"
            autoFocus={true}
            onChange={({ target }) => setPost({ ...post, title: target.value })}
          />
        </div>
        <div className="write-form_group">
          <textarea
            placeholder="tell your story..."
            type="text"
            className="write-input write-text"
            onChange={({ target }) => setPost({ ...post, desc: target.value })}
          ></textarea>
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

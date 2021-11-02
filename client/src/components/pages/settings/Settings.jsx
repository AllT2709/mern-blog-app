import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./settings.css";
import Sidebar from "../../sidebar/Sidebar";
import { updateSuccess, updateStart } from "../../../actions/user";
import { upload } from "../../../services/posts.services";

const pf = "http://localhost:3000/images";
const initImg =
  "https://pbs.twimg.com/profile_images/1064544692707172354/LuZuUIkr_400x400.jpg";

export default function Settings() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [success, setSuccess] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState({
    username: user.username,
    email: user.email,
    password: "",
    profilePic: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userUpdated = {
      userId: user._id,
      username: userToUpdate.username,
      email: userToUpdate.email,
      password: userToUpdate.password,
    };
    dispatch(updateStart());
    if (userToUpdate.profilePic) {
      const data = new FormData();
      const filename = Date.now() + userToUpdate.profilePic.name;
      data.append("name", filename);
      data.append("file", userToUpdate.profilePic);
      userUpdated.profilePic = filename;
      try {
        upload(data);
      } catch (error) {}
    }
    dispatch(updateSuccess(user._id, userUpdated));
    setSuccess(true);
  };
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update_title">Update your account</span>
          <span className="settings-delete_title">Delete account</span>
        </div>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings-pp">
            <img
              src={
                userToUpdate.profilePic
                  ? URL.createObjectURL(userToUpdate.profilePic)
                  : `${pf}/${user.profilePic}`
              }
              alt="profile image"
            />
            <label htmlFor="fileInput">
              <i className="settings-pp_icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={({ target }) =>
                setUserToUpdate({
                  ...userToUpdate,
                  profilePic: target.files[0],
                })
              }
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username..."
            value={userToUpdate.username}
            onChange={({ target }) =>
              setUserToUpdate({ ...userToUpdate, username: target.value })
            }
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="user@mail.com"
            value={userToUpdate.email}
            onChange={({ target }) =>
              setUserToUpdate({ ...userToUpdate, email: target.value })
            }
          />
          <label>Password</label>
          <input
            type="password"
            onChange={({ target }) =>
              setUserToUpdate({ ...userToUpdate, password: target.value })
            }
          />
          <button className="settings-submit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

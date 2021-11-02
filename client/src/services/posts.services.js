import axios from "axios";
const URL = "http://localhost:3000/api";

export const getAllPosts = async (search) => {
  const res = await axios.get(`${URL}/posts/${search}`);
  return res.data;
};

export const getPost = async (id) => {
  const res = await axios.get(`${URL}/posts/${id}`);
  return res.data;
};

export const addPost = async (post) => {
  const res = await axios.post(`${URL}/posts`, post);
  return res.data;
};

export const deletePost = async (id, username) => {
  await axios.delete(`${URL}/posts/${id}`, { data: { username } });
};

export const putPost = async (id, data) => {
  await axios.put(`${URL}/posts/${id}`, data);
};

export const upload = async (data) => {
  return await axios.post(`${URL}/upload`, data);
};

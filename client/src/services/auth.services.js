import axios from "axios";
const URL = "http://localhost:3000/api";

export const register = async (data) => {
  const res = await axios.post(`${URL}/register`, data);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post(`${URL}/login`, data);
  return res.data;
};

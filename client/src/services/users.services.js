import axios from "axios";
const URL = "http://localhost:3000/api";

export const putUser = async (id, data) => {
  const res = await axios.put(`${URL}/users/${id}`, data);
  return res.data;
};

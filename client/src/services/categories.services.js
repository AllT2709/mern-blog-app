import axios from "axios";
const URL = "http://localhost:3000/api";

export const getCategories = () => {
  return axios.get(`${URL}/categories`).then((response) => {
    const { data } = response;
    return data;
  });
};

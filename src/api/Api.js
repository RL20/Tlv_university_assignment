//↓↓↓ The code below it's just an example of how to connect to API when I have the access ↓↓↓

import axios from "axios";

/************************DB connection**********************************/
let url;

if (process.env.NODE_ENV === "production") {
  // url = "api";
  url = "https://pdfGenerator.herokuapp.com/api";
}
if (process.env.NODE_ENV === "development") {
  url = "http://localhost:9000/api";
}

export const api = axios.create({
  baseURL: url,
});

/************************Users******************************************/
export const getUsers = async () => {
  try {
    let { data } = await api.get("/users");
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
export const getUser = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
export const updateUser = async (id, obj) => {
  try {
    const { data } = await api.put(`/users/${id}`, obj);
    return data;
  } catch (e) {
    console.log(e.message);
    console.dir(e);
  }
};
export const creatUser = async (obj) => {
  try {
    let { data } = await api.post(`/users`, obj);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
export const deleteUser = async (id) => {
  try {
    let { data } = await api.delete(`/users/${id}`);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

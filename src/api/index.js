import axios from "axios";

const API = axios.create({
  baseURL: "https://codeforces-compar.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const signIn = (userData) => API.post("/user/signIn", userData);
export const signUp = (userData) => API.post("/user/signUp", userData);
export const fetchList = () => API.get("/list");

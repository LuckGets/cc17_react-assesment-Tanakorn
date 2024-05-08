import axios from "axios";

const baseURL = "https://cc17-assessment-api.onrender.com";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzE1MTQ2OTU4LCJleHAiOjE3MTUyMzMzNTh9.K77vUgOas_8le7-YKjVHH_X0guzRHqalL2qKPoLKrXk";
let userId = "userId=9";

export const getMe = async () => {
  const res = await axios.get(`${baseURL}/auth/me?${userId}`);
  console.log(res.data);
};

export const login = async (username,password) => {
  try {
    return await axios.post(`${baseURL}/auth/login`, {
      email: username, password: password ,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getAllTodo = async () => {
  const res = await axios.get(`${baseURL}/v2/todo`,{
    headers: {
      Authorization: `Bearer ${token}`, 
      },
  }).then(res => res.data)
  return res.data
}

export const createTodo = async (createTask) => {
  try {
  const response = await axios.post(`${baseURL}/v2/todo?${userId}`, {title: createTask}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.data)
  return response.data
  } catch (e) {
    console.log(e)
  }
}

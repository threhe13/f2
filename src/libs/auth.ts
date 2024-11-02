import axios from "axios";

const baseInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3600,
  headers: {
    "Content-Type": "application/json",
  },
});

const createUser = (email: string, password: string) => {
  return baseInstance.post("/users/create", { email, password });
};

const loginUser = (email: string, password: string) => {
  return baseInstance.post("/users/login", { email, password });
};

export { createUser, loginUser };

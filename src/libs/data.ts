import axios from "axios";

const baseInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3600,
  headers: {
    "Content-Type": "application/json",
  },
});

const getTodos = (token: string) => {
  return baseInstance.get("/todos", { headers: { Authorization: token } });
};

const getTodoById = (token: string, id: string) => {
  return baseInstance.get(`/todos/${id}`, {
    headers: { Authorization: token },
  });
};

const createTodo = (
  token: string,
  todo: { title: string; content: string }
) => {
  return baseInstance.post("/todos", todo, {
    headers: { Authorization: token },
  });
};

const updateTodo = (
  token: string,
  id: string,
  todo: { title: string; content: string }
) => {
  return baseInstance.put(`/todos/${id}`, todo, {
    headers: { Authorization: token },
  });
};

const deleteTodo = (token: string, id: string) => {
  return baseInstance.delete(`/todos/${id}`, {
    headers: { Authorization: token },
  });
};

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };

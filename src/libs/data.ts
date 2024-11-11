import axios from "axios";
import TokenStorage from "./storage";

function DataLoader() {
  const storage: TokenStorage = new TokenStorage("token");
  const token = storage.getToken();

  if (!token) {
    throw new Error("[dataLoader] Token을 찾을 수 없습니다.");
  }

  const baseUrl = (function () {
    return axios.create({
      baseURL: "http://localhost:8080",
      timeout: 3600,
      headers: {
        "Content-Type": "application/json",
      },
    });
  })();

  function getTodos() {
    return baseUrl.get("/todos", {
      headers: { Authorization: token },
    });
  }

  function getTodoById(id: string) {
    return baseUrl.get(`/todos/${id}`, {
      headers: { Authorization: token },
    });
  }

  function createTodo(todo: { title: string; content: string }) {
    return baseUrl.post("/todos", todo, {
      headers: { Authorization: token },
    });
  }

  function updateTodo(id: string, todo: { title: string; content: string }) {
    return baseUrl.put(`/todos/${id}`, todo, {
      headers: { Authorization: token },
    });
  }

  function deleteTodo(id: string) {
    return baseUrl.delete(`/todos/${id}`, {
      headers: { Authorization: token },
    });
  }

  return {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };
}

export default DataLoader;

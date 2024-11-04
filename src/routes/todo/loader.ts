import { getTodos } from "../../libs/data";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const todo = await getTodos(token);
  return { todos: todo.data.data };
}

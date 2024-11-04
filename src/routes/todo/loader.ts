import { redirect } from "react-router-dom";
import { getTodos } from "../../libs/data";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/auth");

  const todo = await getTodos(token);
  return { todos: todo.data.data };
}

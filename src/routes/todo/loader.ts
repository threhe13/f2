import { redirect } from "react-router-dom";
import { getTodos } from "../../libs/data";
import TokenStorage from "../../libs/storage";

export async function loader() {
  const storage = new TokenStorage("token");

  const token = storage.getToken();
  if (!token) return redirect("/auth");

  const todo = await getTodos(token);
  return { todos: todo.data.data };
}

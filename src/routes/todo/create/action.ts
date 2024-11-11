import { redirect } from "react-router-dom";
import { createTodo } from "../../../libs/data";
import TokenStorage from "../../../libs/storage";

export async function action({ request }: { request: Request }) {
  const storage = new TokenStorage("token");

  const token = storage.getToken();
  if (!token) return;

  const formData = await request.formData();
  const todoData = await createTodo(token, {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });
  const todo = todoData.data.data;

  return redirect(`/${todo.id}`);
}

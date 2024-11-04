import { redirect } from "react-router-dom";
import { createTodo } from "../../../libs/data";

export async function action({ request }: { request: Request }) {
  const token = localStorage.getItem("token");
  if (!token) return;

  const formData = await request.formData();
  const todoData = await createTodo(token, {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });
  const todo = todoData.data.data;

  return redirect(`/todos/${todo.id}`);
}

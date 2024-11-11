import { redirect } from "react-router-dom";
import { updateTodo } from "../../../../libs/data";
import { TodoActionParams } from "../../../../types/todo";
import TokenStorage from "../../../../libs/storage";

export async function action({
  request,
  params,
}: {
  request: Request;
  params: unknown;
}) {
  const storage = new TokenStorage("token");

  const token = storage.getToken();
  if (!token) return;

  const { todoId } = params as TodoActionParams;
  const formData = await request.formData();
  const todoData = await updateTodo(token, todoId, {
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });
  const todo = todoData.data.data;

  return redirect(`/${todo.id}/edit`);
}

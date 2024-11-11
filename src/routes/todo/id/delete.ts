import { redirect } from "react-router-dom";
import { deleteTodo } from "../../../libs/data";
import { TodoActionParams } from "../../../types/todo";
import TokenStorage from "../../../libs/storage";

export async function action({ params }: { params: unknown }) {
  const storage = new TokenStorage("token");

  const token = storage.getToken();
  if (!token) return;

  const { todoId } = params as TodoActionParams;
  console.log(todoId);
  await deleteTodo(token, todoId);

  return redirect("/");
}

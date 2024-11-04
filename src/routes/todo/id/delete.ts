import { redirect } from "react-router-dom";
import { deleteTodo } from "../../../libs/data";
import { TodoActionParams } from "../../../types/todo";

export async function action({ params }: { params: unknown }) {
  const token = localStorage.getItem("token");
  if (!token) return;

  const { todoId } = params as TodoActionParams;
  console.log(todoId);
  await deleteTodo(token, todoId);

  return redirect("/todos");
}

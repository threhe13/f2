import { getTodoById } from "../../../libs/data";
import { TodoActionParams } from "../../../types/todo";

export async function loader({ params }: { params: unknown }) {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const { todoId } = params as TodoActionParams;
  const todo = await getTodoById(token, todoId);
  return { todo: todo.data.data };
}

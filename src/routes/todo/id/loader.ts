import { getTodoById } from "../../../libs/data";
import TokenStorage from "../../../libs/storage";
import { TodoActionParams } from "../../../types/todo";

export async function loader({ params }: { params: unknown }) {
  const storage = new TokenStorage("token");

  const token = storage.getToken();
  if (!token) return;

  const { todoId } = params as TodoActionParams;
  const todo = await getTodoById(token, todoId);
  return { todo: todo.data.data };
}

import { getTodoById } from "../../../libs/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loader({ params }: { params: any }) {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const todo = await getTodoById(token, params.todoId);
  return { todo: todo.data.data };
}

import { redirect } from "react-router-dom";

import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../../libs/data";
import { TodoActionParams } from "../../../types/todo";

export const deleteTodoByIdQuery = (id: string) => ({
  queryKey: ["todos", id],
  queryFn: async () => {
    const { deleteTodo } = DataLoader();
    const deletedTodo = await deleteTodo(id);
    return deletedTodo.data.data;
  },
});

export const action =
  (queryClient: QueryClient) =>
  async ({ params }: { params: unknown }) => {
    const { todoId } = params as TodoActionParams;
    const query = deleteTodoByIdQuery(todoId);
    await queryClient.fetchQuery(query);
    await queryClient.invalidateQueries({ queryKey: ["todos"] });
    return redirect("/");
  };

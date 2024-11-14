import type { QueryClient } from "@tanstack/react-query";
import { redirect } from "react-router-dom";

import DataLoader from "../../../../libs/data";
import { TodoActionParams } from "../../../../types/todo";

export const updateTodoByIdQuery = (
  id: string,
  form: { title: string; content: string }
) => ({
  queryKey: ["todos", id],
  queryFn: async () => {
    const { updateTodo } = DataLoader();
    const updatedTodo = await updateTodo(id, form);
    return updatedTodo.data.data;
  },
});

export const action =
  (queryClient: QueryClient) =>
  async ({ request, params }: { request: Request; params: unknown }) => {
    const { todoId } = params as TodoActionParams;

    const formData = await request.formData();
    const getFormData = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    };

    const query = updateTodoByIdQuery(todoId, getFormData);
    const queryData = await queryClient.fetchQuery(query);
    console.info("Edit action: ", queryData);

    await queryClient.invalidateQueries({ queryKey: ["todos"] });

    return redirect(`/${todoId}/edit`);
  };

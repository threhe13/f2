import { redirect } from "react-router-dom";

import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../../libs/data";
import { TodoActionParams } from "../../../types/todo";

export const createTodoQuery = (
  id: string,
  form: { title: string; content: string }
) => ({
  queryKey: ["todos", id],
  queryFn: async () => {
    const { createTodo } = DataLoader();
    const createdTodo = await createTodo(form);
    return createdTodo.data.data;
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

    const query = createTodoQuery(todoId, getFormData);
    const queryData = await queryClient.fetchQuery(query);
    console.info("Create action: ", queryData);
    await queryClient.invalidateQueries({ queryKey: ["todos", queryData] });

    return redirect(`/${queryData.id}`);
  };

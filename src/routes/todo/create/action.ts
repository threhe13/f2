import { redirect } from "react-router-dom";

import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../../libs/data";

export const action =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const { createTodo } = DataLoader();

    const formData = await request.formData();
    const todoData = await createTodo({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    });
    await queryClient.invalidateQueries({ queryKey: ["todos"] });
    const todo = todoData.data.data;

    return redirect(`/${todo.id}`);
  };

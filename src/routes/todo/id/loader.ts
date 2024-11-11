import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../../libs/data";
import { TodoActionParams } from "../../../types/todo";

export const todoByIdQuery = (id: string) => ({
  queryKey: ["todos", id],
  queryFn: async () => {
    const { getTodoById } = DataLoader();
    const todoById = await getTodoById(id);
    return todoById.data.data;
  },
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: unknown }) => {
    const { todoId } = params as TodoActionParams;
    const query = todoByIdQuery(todoId);
    const queryData = await queryClient.ensureQueryData(query);
    return queryData;
  };

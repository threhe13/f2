import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../libs/data";

export const todoQuery = () => ({
  queryKey: ["todos"],
  queryFn: async () => {
    const { getTodos } = DataLoader();
    const todosData = await getTodos();
    return todosData.data.data;
  },
});

export const loader = (queryClient: QueryClient) => async () => {
  const query = todoQuery();
  const queryData = await queryClient.ensureQueryData(query);

  return queryData;
};

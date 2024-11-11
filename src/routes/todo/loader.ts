import { redirect } from "react-router-dom";

import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../libs/data";
import TokenStorage from "../../libs/storage";

export const todoQuery = () => ({
  queryKey: ["todos"],
  queryFn: async () => {
    const { getTodos } = DataLoader();
    const todosData = await getTodos();
    return todosData.data.data;
  },
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: unknown }) => {
    const storage = new TokenStorage("token");

    const token = storage.getToken();
    if (!token) return redirect("/auth");

    const query = todoQuery();
    const queryData = await queryClient.ensureQueryData(query);

    return queryData;
  };

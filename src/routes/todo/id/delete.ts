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

    await queryClient.invalidateQueries({ queryKey: ["todos", todoId] });

    // 삭제 쿼리 실행
    const query = deleteTodoByIdQuery(todoId);
    await queryClient.fetchQuery(query);

    // 특정 todo 항목의 캐시 무효화

    // 할 일 목록에서 해당 항목 삭제
    queryClient.setQueryData(["todos"], (oldTodos: any[] | undefined) => {
      if (!oldTodos) return []; // 만약 기존 데이터가 없으면 빈 배열 반환
      return oldTodos.filter((todo) => todo.id !== todoId);
    });

    // 필요한 경우 캐시 무효화로 목록 새로고침
    await queryClient.invalidateQueries({ queryKey: ["todos"] });

    return redirect("/");
  };

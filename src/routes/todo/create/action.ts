import { redirect } from "react-router-dom";

import type { QueryClient } from "@tanstack/react-query";

import DataLoader from "../../../libs/data";

export const createTodoMutation = async (form: {
  title: string;
  content: string;
}) => {
  const { createTodo } = DataLoader();
  const createdTodo = await createTodo(form);
  return createdTodo.data.data;
};

export const action =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const getFormData = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    };

    // 새로운 할 일 생성
    const newTodo = await createTodoMutation(getFormData);
    console.info("Create action: ", newTodo);

    // 기존 할 일 목록에 새로운 항목 추가
    queryClient.setQueryData(["todos"], (oldTodos: any[] | undefined) => {
      return oldTodos ? [...oldTodos, newTodo] : [newTodo];
    });

    // 필요에 따라 전체 목록을 새로고침
    await queryClient.invalidateQueries({ queryKey: ["todos"] });

    // 생성된 할 일로 리다이렉트
    return redirect(`/${newTodo.id}`);
  };

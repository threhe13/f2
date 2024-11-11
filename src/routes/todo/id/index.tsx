import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Todo } from "../../../types/todo";
import { todoByIdQuery } from "./loader";

export const TodoById = () => {
  const params = useParams();

  const todoId = useMemo(() => {
    return params.todoId as string;
  }, [params]);

  const { data: todo } = useQuery(todoByIdQuery(todoId)) as {
    data: Todo;
  };

  if (!todo) {
    return null;
  }

  return (
    <article className="w-full h-full flex flex-col justify-center items-center p-4 gap-4">
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <span className="text-xl font-bold">Title</span>
        <span className="p-2">{todo.title}</span>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <span className="text-xl font-bold">Content</span>
        <span className="p-2 text-start">{todo.content}</span>
      </div>
    </article>
  );
};

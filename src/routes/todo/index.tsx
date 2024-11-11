import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { TodoTemplate } from "../../templates/todo";

import type { Todo } from "../../types/todo";
import { todoQuery } from "./loader";

export function Todo() {
  const params = useParams();

  const todoId = useMemo(() => {
    return params.todoId as string;
  }, [params]);

  const { data: todos } = useQuery(todoQuery()) as { data: Todo[] };

  return <TodoTemplate todoId={todoId} todos={todos} />;
}

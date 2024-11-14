import { useQuery } from "@tanstack/react-query";

import { TodoTemplate } from "../../templates/todo";

import type { Todo } from "../../types/todo";
import { todoQuery } from "./loader";

export function Todo() {
  const { data: todos } = useQuery(todoQuery()) as { data: Todo[] };

  return <TodoTemplate todos={todos} />;
}

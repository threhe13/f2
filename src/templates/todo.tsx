import { Link, Outlet } from "react-router-dom";

import { Card } from "../components/card";

import type { Todo } from "../types/todo";
import { TodoNavbar } from "../layouts/todo/navbar";

interface TodoTemplateInterface {
  todoId: string;
  todos: Todo[];
}

export function TodoTemplate({ todoId, todos }: TodoTemplateInterface) {
  return (
    <div className="w-full h-full grid grid-cols-3">
      <section className="w-full h-full col-span-1 min-h-svh overflow-hidden p-2">
        <div className="w-full h-full flex flex-col justify-start items-start gap-2">
          {todos.map((todo) => (
            <Link to={todo.id} className="w-full" key={todo.id}>
              <Card todo={todo} />
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full h-full col-span-2">
        <TodoNavbar todoId={todoId} />
        <div className="flex flex-col justify-start items-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

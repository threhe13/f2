import { Link, Outlet } from "react-router-dom";

import { Card } from "../components/card";

import type { Todo } from "../types/todo";
import { TodoNavbar } from "../layouts/todo/navbar";

interface TodoTemplateInterface {
  todos: Todo[];
}

export function TodoTemplate({ todos }: TodoTemplateInterface) {
  return (
    <div className="w-full h-full flex gap-2">
      <section className="w-full h-full min-h-svh p-2 max-w-xs border-2 border-slate-200 rounded-md">
        <div className="w-full h-full flex flex-col justify-start items-start gap-2 overflow-y-auto">
          <TodoNavbar />
          {todos.map((todo) => (
            <Link to={todo.id} className="w-full" key={todo.id}>
              <Card todo={todo} />
            </Link>
          ))}
        </div>
      </section>

      <section className="w-full h-full">
        <div className="flex flex-col justify-start items-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

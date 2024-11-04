import { Form, Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Card } from "../components/card";
import { Todo } from "../types/todo";
import { SyntheticEvent, useMemo } from "react";
import { Add, Delete, Edit } from "../icons";

export function TodoTemplate() {
  const { todos } = useLoaderData() as { todos: Todo[] };
  const { todoId } = useParams();

  const isEditable: boolean = useMemo(() => {
    if (todoId) {
      return false;
    }
    return true;
  }, [todoId]);

  const handleDelete = (e: SyntheticEvent<HTMLFormElement>) => {
    if (!confirm("이 할 일을 지우시겠습니까?")) {
      e.preventDefault();
    }
  };

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
        <div className="flex flex-col justify-start items-center">
          <div className="w-full flex justify-end items-center p-4 gap-4">
            <Form
              method="delete"
              action={`${todoId}/delete`}
              onSubmit={handleDelete}
            >
              <button
                type="submit"
                disabled={isEditable}
                className="hover:bg-red-100 border-2 border-red-600 transition-all disabled:bg-slate-100 disabled:border-slate-300"
              >
                <Delete color={isEditable ? "#cbd5e1" : "#dc2626"} />
              </button>
            </Form>
            <Link to={`${todoId}/edit`}>
              <button
                type="button"
                disabled={isEditable}
                className="hover:bg-blue-100 border-2 border-blue-600 transition-all disabled:bg-slate-100 disabled:border-slate-300"
              >
                <Edit color={isEditable ? "#cbd5e1" : "#2563eb"} />
              </button>
            </Link>
            <Link to="create">
              <button
                type="button"
                className="hover:bg-blue-100 border-2 border-blue-600 transition-all "
              >
                <Add color="#2563eb" />
              </button>
            </Link>
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
}

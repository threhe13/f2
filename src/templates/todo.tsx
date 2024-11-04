import { Form, Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Card } from "../components/card";
import { Todo } from "../types/todo";
import { SyntheticEvent, useMemo } from "react";

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
                className="bg-red-500 text-white hover:bg-red-400 transition-all disabled:bg-slate-300 disabled:text-slate-600"
              >
                삭제하기
              </button>
            </Form>
            <Link to={`${todoId}/edit`}>
              <button
                type="button"
                disabled={isEditable}
                className="bg-blue-600 text-white hover:bg-blue-500 transition-all disabled:bg-slate-300 disabled:text-slate-600"
              >
                수정하기
              </button>
            </Link>
            <Link to="create">
              <button
                type="button"
                className="bg-blue-600 text-white hover:bg-blue-500 transition-all disabled:bg-slate-300 disabled:text-slate-600"
              >
                추가하기
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

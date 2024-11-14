import { SyntheticEvent, useMemo } from "react";
import { Form, Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Todo } from "../../../types/todo";
import { todoByIdQuery } from "./loader";
import { Delete, Edit } from "../../../icons";
import { Button } from "../../../components/button";

export const TodoById = () => {
  const params = useParams();
  const todoId = useMemo(() => {
    return params.todoId as string;
  }, [params]);

  const { data: todo } = useQuery(todoByIdQuery(todoId)) as {
    data: Todo;
  };

  if (!todo) return <div>삭제된 할 일 입니다.</div>;

  const handleDelete = (e: SyntheticEvent<HTMLFormElement>) => {
    if (!confirm("이 할 일을 지우시겠습니까?")) {
      e.preventDefault();
    }
  };

  return (
    <section className="w-full flex p-4 gap-4">
      <article className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <span className="text-xl font-bold">Title</span>
          <span className="py-2">{todo.title}</span>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <span className="text-xl font-bold">Content</span>
          <span className="py-2 text-start">{todo.content}</span>
        </div>
      </article>

      <div className="flex flex-col gap-2">
        <Form method="delete" action="delete" onSubmit={handleDelete}>
          <Button
            type="submit"
            className="border-red-400 bg-red-600 hover:bg-red-400"
          >
            <Delete color="white" />
          </Button>
        </Form>
        <Link to="edit">
          <Button type="submit">
            <Edit color="white" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

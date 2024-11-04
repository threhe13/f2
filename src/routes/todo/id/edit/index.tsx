import { useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import { SyntheticEvent, useEffect, useMemo, useState } from "react";
import { TodoForm } from "../../../../components/form/todo";
import { Todo } from "../../../../types/todo";

type TodoFormType = {
  title: string;
  content: string;
};

export const EditTodoById = () => {
  const { todo } = useLoaderData() as { todo: Todo };
  const navigate = useNavigate();
  const submit = useSubmit();

  const updateTodo = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const form = e.currentTarget.form;
    submit(form);
  };

  const isDisabled: boolean = useMemo(() => {
    if (!todo.title) {
      return true;
    }
    return false;
  }, [todo]);

  return (
    <TodoForm
      type="edit"
      updateForm={updateTodo}
      isDisabled={isDisabled}
      title={todo.title}
      content={todo.content}
      afterEdit={() => {
        navigate(-1);
      }}
    />
  );
};

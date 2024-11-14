import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import { useNavigate, useParams, useSubmit } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { TodoForm } from "../../../../components/form/todo";
import { todoByIdQuery } from "../loader";

import type { Todo } from "../../../../types/todo";
import { Button } from "../../../../components/button";

type TodoFormType = {
  title: string;
  content: string;
};

export const EditTodoById = () => {
  const params = useParams();
  const todoId = useMemo(() => {
    return params.todoId as string;
  }, [params]);

  const { data: todo } = useQuery(todoByIdQuery(todoId)) as {
    data: Todo;
  };
  const navigate = useNavigate();
  const submit = useSubmit();

  const [formState, setFormState] = useState<TodoFormType>({
    title: todo.title,
    content: todo.content,
  });

  const updateTodo = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormState((state: TodoFormType) => ({ ...state, [target]: value }));

    const form = e.currentTarget.form;
    submit(form);
  };

  const isDisabled: boolean = useMemo(() => {
    if (!todo.title) {
      return true;
    }
    return false;
  }, [todo]);

  const saveEdit = useCallback(() => {
    navigate(`/${todoId}`);
  }, [navigate, todoId]);

  return (
    <TodoForm
      method="put"
      updateForm={updateTodo}
      title={formState.title}
      content={formState.content}
    >
      <Button disabled={isDisabled} type="button" onClick={saveEdit}>
        저장하기
      </Button>
    </TodoForm>
  );
};

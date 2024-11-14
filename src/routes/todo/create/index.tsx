import { SyntheticEvent, useMemo, useState } from "react";
import { TodoForm } from "../../../components/form/todo";
import { Button } from "../../../components/button";

type TodoFormType = {
  title: string;
  content: string;
};

export function TodoCreate() {
  const [formState, setFormState] = useState<TodoFormType>({
    title: "",
    content: "",
  });

  const updateForm = (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormState((state: TodoFormType) => ({ ...state, [name]: value }));
  };

  const isDisabled: boolean = useMemo(() => {
    if (!formState.title) {
      return true;
    }
    return false;
  }, [formState]);

  return (
    <TodoForm
      method="post"
      updateForm={updateForm}
      title={formState.title}
      content={formState.content}
    >
      <Button disabled={isDisabled} type="submit">
        저장하기
      </Button>
    </TodoForm>
  );
}

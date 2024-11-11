import { SyntheticEvent, useMemo } from "react";
import { Form, Link } from "react-router-dom";

import { Add, Delete, Edit } from "../../icons";

interface TodoNavbarInterface {
  todoId: string;
}

export const TodoNavbar = ({ todoId }: TodoNavbarInterface) => {
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
    <div className="w-full flex justify-end items-center p-4 gap-4">
      <Form method="delete" action={`${todoId}/delete`} onSubmit={handleDelete}>
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
  );
};

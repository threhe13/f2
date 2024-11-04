import { useLoaderData } from "react-router-dom";
import { Todo } from "../../../types/todo";

export const TodoById = () => {
  const { todo } = useLoaderData() as { todo: Todo };

  return (
    <article className="w-full h-full flex flex-col justify-center items-center p-4 gap-4">
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <span className="text-xl font-bold">Title</span>
        <span className="p-2">{todo.title}</span>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <span className="text-xl font-bold">Content</span>
        <span className="p-2 text-start">{todo.content}</span>
      </div>
    </article>
  );
};

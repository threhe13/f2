import { SyntheticEvent } from "react";
import { Input } from "../input";
import { Textarea } from "../text-area";
import { Form, Link } from "react-router-dom";

interface TodoFormInterface {
  type: "create" | "edit";
  updateForm: (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isDisabled: boolean;
  title: string;
  content: string;
  afterEdit?: () => void;
}

export const TodoForm = ({
  type,
  title,
  content,
  isDisabled,
  updateForm,
  afterEdit,
}: TodoFormInterface) => {
  return (
    <Form
      method="post"
      className="w-full h-full flex flex-col justify-center items-center p-4 gap-4"
    >
      <Input
        required
        type="text"
        label="Title"
        name="title"
        value={title}
        onChange={updateForm}
      />
      <Textarea
        label="Content"
        name="content"
        className="h-full"
        rows={15}
        value={content}
        onChange={updateForm}
      ></Textarea>
      <div className="w-full flex justify-end gap-4">
        {type === "create" && (
          <button
            disabled={isDisabled}
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-500 transition-all disabled:bg-slate-300 disabled:text-slate-600"
          >
            저장하기
          </button>
        )}
        {type === "edit" && (
          <button
            disabled={isDisabled}
            type="button"
            onClick={afterEdit}
            className="bg-blue-600 text-white hover:bg-blue-500 transition-all disabled:bg-slate-300 disabled:text-slate-600"
          >
            저장하기
          </button>
        )}
      </div>
    </Form>
  );
};

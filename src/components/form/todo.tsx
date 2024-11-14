import { SyntheticEvent } from "react";
import { Form } from "react-router-dom";

import { Input } from "../input";
import { Textarea } from "../text-area";

interface TodoFormInterface {
  method: "post" | "put";
  updateForm: (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  title: string;
  content: string;
  children?: React.ReactNode;
}

export const TodoForm = ({
  method,
  title,
  content,
  updateForm,
  children,
}: TodoFormInterface) => {
  return (
    <Form
      method={method}
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
      <div className="w-full flex justify-end gap-4">{children}</div>
    </Form>
  );
};

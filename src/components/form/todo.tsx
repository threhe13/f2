import { SyntheticEvent, useState } from "react";
import { Form } from "react-router-dom";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";

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
  const plans = ["urgent", "normal", "low"];

  const [selected, setSelected] = useState(plans[1]);

  return (
    <Form
      method={method}
      className="w-full h-full flex flex-col justify-center items-center p-4 gap-4"
    >
      <div className="w-full flex justify-start gap-4">
        <div className="w-full">
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
        </div>
        <div className="flex flex-col items-start gap-4">
          <span>Priority</span>
          <RadioGroup name="priority" value={selected} onChange={setSelected}>
            {plans.map((plan) => (
              <Field key={plan} className="flex items-center gap-2">
                <Radio
                  value={plan}
                  className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                >
                  <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                </Radio>
                <Label>{plan}</Label>
              </Field>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="w-full flex justify-end gap-4">{children}</div>
    </Form>
  );
};

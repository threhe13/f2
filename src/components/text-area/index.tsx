import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaInterface
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaInterface>(
  ({ label, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <span className="">{label}</span>
        <textarea
          {...props}
          ref={ref}
          className="w-full rounded-md border-2 border-blue-500"
        />
      </div>
    );
  }
);

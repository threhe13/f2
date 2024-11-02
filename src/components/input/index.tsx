import { forwardRef, InputHTMLAttributes } from "react";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: string;
}

export const Input = forwardRef<HTMLInputElement, InputInterface>(
  ({ label, isError, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col justify-center items-start gap-2">
        <span className="">{label}</span>
        <input
          {...props}
          ref={ref}
          className="w-full rounded-md border-2 border-blue-500"
        />
        {isError && <span className="text-red-500">{isError}</span>}
      </div>
    );
  }
);

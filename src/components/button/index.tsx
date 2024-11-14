import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonInterface>(
  ({ className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "bg-blue-600 border-2 hover:bg-blue-400 border-blue-400 rounded-lg text-white px-4 py-2 text-sm hover:border-[#fff] cursor-pointer transition-all",
          className
        )}
      />
    );
  }
);

import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextInput = forwardRef<
  HTMLInputElement | null,
  Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">
>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        "w-full h-[48px] px-4 rounded-[4px] bg-transparent border border-[#acbdcb] text-black outline-[3px] outline-border/10",
        className
      )}
    />
  );
});

TextInput.displayName = "TextInput";

import { TextareaHTMLAttributes, forwardRef } from "react";

export const TextArea = forwardRef<
  HTMLTextAreaElement | null,
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "color">
>(({ value, ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      rows={5}
      className="w-full h-[100px] p-4 rounded-[4px] border border-border/10 text-black outline-[3px] outline-border/10"
      value={value}
    ></textarea>
  );
});

TextArea.displayName = "TextArea";

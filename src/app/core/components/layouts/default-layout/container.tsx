import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full max-w-[800px] mx-auto px-[10px]">
      {children}
    </div>
  );
};

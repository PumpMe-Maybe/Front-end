import classNames from "classnames";
import { HomeStep } from "../../home-container";
import { Footer } from "./footer";
import { PropsWithChildren } from "react";

export const DefaultLayout: React.FC<
  PropsWithChildren & {
    step?: HomeStep;
  }
> = ({ children, step }) => {
  return (
    <div className="bg-white">
      <div
        className={classNames("w-full  bg-gray-50  grid", {
          "h-auto": step === "success" || step === "error",
          "h-[calc(100vh-50px)]": step !== "success" && step !== "error",
        })}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

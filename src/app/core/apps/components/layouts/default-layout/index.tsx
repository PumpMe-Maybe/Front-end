import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { PropsWithChildren } from "react";

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="w-full h-[calc(100vh-120px)] bg-gray-50  grid">
        {children}
      </div>
      <Footer />
    </div>
  );
};

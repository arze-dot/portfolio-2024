import { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

type LayoutType = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutType) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row items-start justify-start">
      <Sidebar />
      <div className="h-[100vh] flex-1 flex flex-col items-start justify-start">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

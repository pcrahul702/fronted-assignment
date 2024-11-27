import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
const Layout = ({role}) => {
  console.log('role',role)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex flex-row bg-neutral-100 max-h-screen ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} role={role}/>
      <div className="flex-1">
        <Header  toggleSidebar={toggleSidebar} role={role}/>
        <main  className="flex-1 md:p-6 mx-auto p-2 overflow-y-scroll max-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

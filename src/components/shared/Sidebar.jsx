import React, { useState } from "react";
import { RiMentalHealthLine } from "react-icons/ri";
import { SIDEBAR_ITEMS } from "../../utils/Constant/constant";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineX } from "react-icons/hi";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-custom-hover hover:text-custom-white rounded-lg hover:no-underline active:bg-custom-hover rounded-sm text-base";

const Sidebar = ({ isOpen, toggleSidebar, role }) => {
  console.log(SIDEBAR_ITEMS["admin"],role)
  return (
    <>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-custom-blue bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar container */}
      <div
        className={`min-h-screen fixed inset-y-0 left-0 w-60 bg-custom-blue p-3 flex flex-col text-custom-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static lg:w-60`}
      >
        {/* Close button for mobile view */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 text-custom-white"
        >
          <HiOutlineX fontSize={24} />
        </button>

        {/* Logo and Sidebar Title */}
        <div className="flex items-center gap-2 px-1 py-3">
        
          <span className="text-custom-white text-xl font-bold">Rahul kr</span>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {SIDEBAR_ITEMS[role]?.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  const isActive = pathname === item.path;
  const hasSubRoutes = item.routes && item.routes.length > 0;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Main Link */}
      <Link
        to={item.path || "#"}
        className={`${linkClasses} ${
          isActive
            ? "bg-custom-hover text-white font-medium shadow-md rounded-md"
            : ""
        }`}
        onClick={(e) => {
          if (hasSubRoutes) {
            e.preventDefault(); // Prevent navigation for parent links with sub-routes
            setIsOpen((prev) => !prev);
          }
        }}
      >
        <span className="text-xl">{React.createElement(item.icon)}</span>
        {item.label}
        {hasSubRoutes && (
          <span className="ml-auto">
            {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </span> // Toggle indicator
        )}
      </Link>

      {/* Nested Links */}
      {hasSubRoutes && isOpen && (
        <div className="ml-4 flex flex-col gap-0.5">
          {item.routes.map((subItem) => {
            const isSubActive = pathname === subItem.path;

            return (
              <Link
                key={subItem.key}
                to={subItem.path}
                className={`${linkClasses} ${
                  isSubActive ? "bg-custom-hover text-white font-medium" : ""
                }`}
              >
                <span className="text-lg">
                  {React.createElement(subItem.icon)}
                </span>
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineMenu,
} from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice"; // Assuming you have a logout action in your redux slice
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };

  return (
    <div className="z-50 sticky top-0 bg-white h-16 px-4 flex justify-between items-center border-b border-gray-200 gap-4 ">
      {/* Menu Icon for mobile to open sidebar */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="text-gray-700">
          <HiOutlineMenu fontSize={24} />
        </button>
      </div>

      {/* Search bar */}
      {/* <div className="relative flex-1 max-w-[140px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-md">
        <HiOutlineSearch fontSize={20} className="absolute top-1/2 -translate-y-1/2 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none md:h-10 h-8 w-full border border-gray-300 rounded-sm pr-4 pl-10"
        />
      </div> */}

      {/* Notification and user icons */}
      <div className="flex items-center gap-3 ml-auto">
        <HiOutlineBell fontSize={20} className="hidden lg:block" />

        {/* Chat Popover */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
                <HiOutlineChatAlt fontSize={20} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-9 z-10 mt-2.5 w-72 sm:w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Message</strong>
                    <div className="mt-2 py-1 text-sm">This is a message</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* User Profile Dropdown */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="p-1.5 rounded-full inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100">
                <HiOutlineUser fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 w-40 sm:w-48 bg-white shadow-lg rounded-sm ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-700 cursor-pointer">Profile</div>
                    <div className="px-4 py-2 text-sm text-gray-700 cursor-pointer">Switch Role</div>
                    <div className="px-4 py-2 text-sm text-gray-700 cursor-pointer">Account</div>
                    <div
                      className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default Header;

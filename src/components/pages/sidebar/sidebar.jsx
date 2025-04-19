import React from "react";
import {
  MdDashboard,
  MdOutlineCalendarToday,
  MdPersonOutline,
  MdOutlineChat,
  MdOutlineEmail,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { BsBarChart } from "react-icons/bs";
import { NavLink } from "react-router";
import { FaTasks } from "react-icons/fa";
// import siteLogo from "./../../../../public/Wpdeveloper.png";
import siteLogo from "/Wpdeveloper.png";

const Sidebar = () => {
  return (
    <div>
      {/* <aside id="sidebar"> */}
      <aside className="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 w-[290px] -translate-x-full lg:translate-x-0">
        {/* <div className="sticky top-0 bg-white z-10 px-6 py-[23px] text-xl font-bold tracking-tight text-blue-600"> */}
        <div className="py-8 flex justify-start">
          {/* TailAdmin */}
          <a href="/" data-discover="true">
            <img
              className="dark:hidden"
              alt="Logo"
              width="150"
              height="40"
              src={siteLogo}
            />
            {/* <img
              className="hidden dark:block"
              alt="Logo"
              width="150"
              height="40"
              src="/images/logo/logo-dark.svg"
            /> */}
          </a>
        </div>

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
          {/* <nav className="flex-1 px-4 space-y-4 overflow-y-auto"> */}
          <nav className="mb-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">
                  Menu
                </h2>
                <ul className="flex flex-col gap-4">
                  <li>
                    <NavLink
                      to="/"
                      // className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                      className="menu-item group menu-item-inactive"
                    >
                      <span className="menu-item-icon-size">
                        <MdDashboard className="text-xl" />
                      </span>
                      <span className="menu-item-text">Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tasks"
                      // className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                      className="menu-item group menu-item-inactive"
                    >
                      <FaTasks className="text-xl" />
                      All Tasks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/users"
                      // className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                      className="menu-item group menu-item-inactive"
                    >
                      <FaUsers className="text-xl" />
                      Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      // className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                      className="menu-item group menu-item-inactive"
                    >
                      <MdPersonOutline className="text-xl" />
                      User Profile
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                {/* <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2"> */}
                <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">
                  Support
                </h2>
                {/* <ul className="space-y-1"> */}
                <ul className="flex flex-col gap-4">
                  <li>
                    <NavLink
                      to="/chat"
                      // className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                      className="menu-item group menu-item-inactive"
                    >
                      <MdOutlineChat className="text-xl" />
                      Chat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/email"
                      // className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                      className="menu-item group menu-item-inactive"
                    >
                      <MdOutlineEmail className="text-xl" />
                      Email
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

import React from "react";
import {
  MdDashboard,
  MdOutlineCalendarToday,
  MdPersonOutline,
  MdOutlineChat,
  MdOutlineEmail,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { BsGraphUpArrow, BsPersonWorkspace } from "react-icons/bs";
import { NavLink } from "react-router";
import { FaTasks } from "react-icons/fa";
import siteLogo from "/Wpdeveloper.png";

const Sidebar = () => {
  return (
    <div>
      <aside className="fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 w-[290px] -translate-x-full lg:translate-x-0">
        <div className="py-8 flex justify-start">
          <a href="/" data-discover="true">
            <img
              className="dark:hidden"
              alt="Logo"
              width="150"
              height="40"
              src={siteLogo}
            />
          </a>
        </div>

        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
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
                      className="menu-item group menu-item-inactive"
                    >
                      <FaTasks className="text-xl" />
                      All Tasks
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/workUpdate"
                      className="menu-item group menu-item-inactive"
                    >
                      {/* <BsGraphUpArrow className="text-xl" /> */}
                      <BsPersonWorkspace className="text-xl" />
                      Work Update
                    </NavLink>
                  </li>

                  {/* <li>
                    <NavLink
                      to="/profile"
                      className="menu-item group menu-item-inactive"
                    >
                      <MdPersonOutline className="text-xl" />
                      User Profile
                    </NavLink>
                  </li> */}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">
                  Admin
                </h2>

                <ul className="flex flex-col gap-4">
                  <li>
                    <NavLink
                      to="/report"
                      className="menu-item group menu-item-inactive"
                    >
                      <BsGraphUpArrow className="text-xl" />
                      Support Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/users"
                      className="menu-item group menu-item-inactive"
                    >
                      <FaUsers className="text-xl" />
                      All Users
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

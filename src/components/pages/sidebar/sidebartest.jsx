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

const SideBarTest = () => {
  return (
    <>
      {/* <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-50 flex flex-col"> */}
      <aside id="sidebar">
        <div className="p-6 text-xl font-bold tracking-tight text-blue-600">
          TailAdmin
        </div>

        <nav className="flex-1 px-4 space-y-4 overflow-y-auto">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Menu
            </h4>
            <ul className="space-y-1">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <MdDashboard className="text-xl" />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calendar"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <MdOutlineCalendarToday className="text-xl" />
                  Calendar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <FaUsers className="text-xl" />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <MdPersonOutline className="text-xl" />
                  User Profile
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Support
            </h4>
            <ul className="space-y-1">
              <li>
                <NavLink
                  to="/chat"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <MdOutlineChat className="text-xl" />
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/email"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <MdOutlineEmail className="text-xl" />
                  Email
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default SideBarTest;

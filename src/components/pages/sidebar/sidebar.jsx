import React from "react";
import { Link, NavLink } from "react-router";
import { GrNotification } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import DrawerContent from "./drawercontent";
import { BsPersonWorkspace } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div id="sidebar">
        <h1 className="flex justify-between">
          <Link
            to="/login"
            className="w-[40px] h-[30px] flex justify-center items-center rounded-lg text-lg inset-shadow-sm inset-shadow-indigo-500/20"
          >
            <MdLogout />
          </Link>
          {/* <Link
            to="/login"
            className="w-[40px] h-[30px] flex justify-center items-center rounded-lg text-lg shadow"
            style={{ boxShadow: "inset 0 2px 4px rgb(99, 101, 241)" }}
          >
            <MdLogout />
          </Link> */}
        </h1>
        <div>
          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center gap-2">
              <img
                className="w-[50px] rounded-3xl"
                src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
                alt=""
              />
              <h2 className="font-bold">Your name</h2>
            </div>
            <div>
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <div className="indicator">
                    <span className="indicator-item status status-success"></span>
                    <label htmlFor="my-drawer-4" className="drawer-button btn">
                      <GrNotification />
                    </label>
                  </div>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <DrawerContent />
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <MdOutlineSpaceDashboard />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="tasks">
                <FaTasks />
                All Task
              </NavLink>
            </li>
            <li>
              <NavLink to="workupdate">
                <BsPersonWorkspace />
                Work Update
              </NavLink>
            </li>
            <li>
              <NavLink to="report">
                <BsGraphUpArrow />
                Work Report
              </NavLink>
            </li>
            <li>
              <NavLink to="users">
                <FaUsers />
                All Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

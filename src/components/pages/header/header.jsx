import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch, FiBell, FiLogOut } from "react-icons/fi";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setHasNew(false); // hide red dot when opened
  };

  const handleSignOut = () => {
    // sign out logic here
    console.log("Signing out...");
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow px-6 py-4 flex items-center justify-between">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search or type command..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-blue-100"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Bell Notification */}
          <div className="relative">
            {/* Bell Button */}
            <button
              onClick={toggleDrawer}
              className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
            >
              <FiBell className="text-xl text-gray-600" />
              {hasNew && (
                <span className="absolute top-1 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 ring-white"></span>
                </span>
              )}
            </button>

            {/* Slide-in Drawer */}
            <div
              className={`absolute right-0 top-12 w-80 bg-white shadow-lg border border-gray-300 rounded-lg transition-transform duration-300 z-50 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-5 opacity-0 pointer-events-none"
              }`}
            >
              <div className="p-4 border-b border-gray-300 font-semibold text-gray-800">
                Assigned Tasks
              </div>
              <ul className="p-4 space-y-4 max-h-72 overflow-y-auto">
                {/* Sample Task */}
                <li className="flex items-start gap-3">
                  <FaUserCircle className="text-2xl text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Design landing page
                    </p>
                    <p className="text-xs text-gray-500">Assigned by Alice</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaUserCircle className="text-2xl text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Update user profile API
                    </p>
                    <p className="text-xs text-gray-500">Assigned by John</p>
                  </div>
                </li>
                {/* Add more tasks here */}
              </ul>
            </div>
          </div>
          {/* <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <FiBell className="text-xl text-gray-600" />
            <span className="absolute top-1 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 ring-white"></span>
            </span>
            <span className="absolute top-1 right-2 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button> */}

          {/* User Info */}
          <Link
            to="/profile"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="User Avatar"
              className="w-9 h-9 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Musharof</span>
          </Link>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-500 transition cursor-pointer"
            title="Sign Out"
          >
            <FiLogOut className="text-xl" />
          </button>

          {/* DropDown Menu */}
          {/* <div className="relative">
            <button
              className="flex items-center gap-2 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User Avatar"
                className="w-9 h-9 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                Musharof
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  User Profile
                </a>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";

const Header = () => {
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
          <button className="relative">
            <FiBell className="text-xl text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="User Avatar"
              className="w-9 h-9 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Musharof</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import SideBarTest from "../components/pages/sidebar/sidebartest";
import HeaderTest from "../components/pages/header/headertest";
import { Outlet } from "react-router";

const MainLayoutTest = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <SideBarTest />

      {/* Main content */}
      {/* <div className="flex flex-col flex-1"> */}
      <div className="flex flex-col flex-1 w-full">
        <HeaderTest />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayoutTest;

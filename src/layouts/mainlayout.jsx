import React from "react";
import Sidebar from "../components/pages/sidebar/sidebar";
import Header from "../components/pages/header/header";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Home from "../components/mainlayout/home";

const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-gray-50 text-gray-900">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        {/* <div className="flex flex-col flex-1"> */}
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>

      {/* <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
      <ToastContainer /> */}

      {/* 2nd process */}
      {/* <Sidebar />
      <div id="detail">
        <Header />

        <main className="px-6 pt-6 overflow-auto max-h-[calc(100vh-80px)]">
          <Outlet />
        </main>
      </div>
      <ToastContainer /> */}
    </>
  );
};

export default MainLayout;

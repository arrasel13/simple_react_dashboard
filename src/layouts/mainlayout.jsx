import React from "react";
import Sidebar from "../components/pages/sidebar/sidebar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Home from "../components/mainlayout/home";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div id="detail">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
};

export default MainLayout;

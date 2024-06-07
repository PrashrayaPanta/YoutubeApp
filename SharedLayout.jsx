import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import SideBar from "./src/components/SideBar";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;

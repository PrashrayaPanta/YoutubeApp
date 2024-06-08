import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import SideBar from "./src/components/SideBar";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComp from "../header";

const HomeLayout = () => {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <p>Footer Comp</p>
    </>
  );
};

export default HomeLayout;

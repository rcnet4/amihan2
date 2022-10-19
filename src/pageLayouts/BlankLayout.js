import React from "react";
import { Outlet } from "react-router-dom";

const Blanklayout = () => {
  return (
    <div className="blank-layout">
      <Outlet />
    </div>
  );
};
export default Blanklayout;

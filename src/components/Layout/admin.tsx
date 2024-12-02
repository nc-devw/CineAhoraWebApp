import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../AdminSidebar";

export const AdminLayout: React.FC = () => {
  return (
    <div className="flex">
      <div>
        <AdminSidebar />
      </div>
      <div className="w-full h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

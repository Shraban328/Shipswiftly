import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Components/Pages/Dashboard/DashboardSidebar/DashboardSidebar";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  return (
    <div className="flex max-w-screen-2xl mx-auto">
      <div className="w-1/5">
        <DashboardSidebar />
      </div>
      <div className="w-4/5">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;

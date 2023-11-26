import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Components/Pages/Dashboard/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;

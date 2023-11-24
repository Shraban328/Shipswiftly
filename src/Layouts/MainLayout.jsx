import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;

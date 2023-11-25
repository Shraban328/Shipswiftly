import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default MainLayout;

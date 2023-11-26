import { Link } from "react-router-dom";
import UserSidebarLinks from "./UserSidebarLinks";
import { CiLogout } from "react-icons/ci";
const DashboardSidebar = () => {
  return (
    <div className="bg-[#1874C1] h-[50vh] rounded-lg text-white p-3 relative">
      <UserSidebarLinks />
      <Link
        to={"/"}
        className="flex items-center flex-row-reverse absolute bottom-5 right-8 hover:cursor-pointer"
      >
        <CiLogout className="text-3xl " />
        <span>Home</span>
      </Link>
    </div>
  );
};

export default DashboardSidebar;

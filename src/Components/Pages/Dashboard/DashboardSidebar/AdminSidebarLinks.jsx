import { NavLink } from "react-router-dom";
import { TbPackages } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdDeliveryDining } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
const AdminSidebarLinks = () => {
  return (
    <ul className="menu">
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#474747] " : "inactive"
          }
          to={"/dashboard/myProfile"}
        >
          <FaUserCircle className="text-2xl" />
          Profile
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#474747] " : "inactive"
          }
          to={"/dashboard/adminHome"}
        >
          <IoHome className="text-2xl" />
          Admin Home
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#474747] " : "inactive"
          }
          to={"/dashboard/allParcels"}
        >
          <TbPackages className="text-2xl" />
          All Parcels
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#050404] " : "inactive"
          }
          to={"/dashboard/allUsers"}
        >
          <PiUsersThreeFill className="text-2xl" />
          All Users
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#050404] " : "inactive"
          }
          to={"/dashboard/allDeliveryMen"}
        >
          <MdDeliveryDining className="text-2xl" />
          All Delivery Men
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#050404] " : "inactive"
          }
          to={"/dashboard/statistics"}
        >
          <IoStatsChart className="text-2xl" />
          Statistics
        </NavLink>
      </li>
    </ul>
  );
};

export default AdminSidebarLinks;

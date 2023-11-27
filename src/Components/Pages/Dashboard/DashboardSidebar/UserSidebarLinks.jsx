import { FaUserCircle } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { LuPackageSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const UserSidebarLinks = () => {
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
          to={"/dashboard/myParcels"}
        >
          <LuPackageSearch className="text-2xl" />
          My Parcels
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#474747] " : "inactive"
          }
          to={"/dashboard/bookParcel"}
        >
          <FiPackage className="text-2xl" />
          Book a parcel
        </NavLink>
      </li>
    </ul>
  );
};

export default UserSidebarLinks;

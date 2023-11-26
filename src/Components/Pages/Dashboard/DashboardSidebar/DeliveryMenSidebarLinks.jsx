import { NavLink } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { TbStars } from "react-icons/tb";
const DeliveryMenSidebarLinks = () => {
  return (
    <ul className="menu">
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#474747] " : "inactive"
          }
          to={"/dashboard/deliveryList"}
        >
          <MdOutlineDeliveryDining className="text-2xl" />
          Delivery List
        </NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? " bg-[#050404] " : "inactive"
          }
          to={"/dashboard/myParcels"}
        >
          <TbStars className="text-2xl" />
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default DeliveryMenSidebarLinks;

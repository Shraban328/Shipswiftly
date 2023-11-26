import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_1.png";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user, userLogout } = useAuth();
  const handleLogout = () => {
    userLogout();
  };
  const navLinks = (
    <div className="font-semibold flex  xl:flex-row md:w-52 space-x-3 text-white text-lg">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "inactive"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "inactive"
          }
          to={"/dashboard/myProfile"}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "inactive"
          }
          to={"/about-us"}
        >
          About us
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="bg-[#1874C1] p-8 pb-1 text">
      <div className="navbar bg-[#1874C1]  m-4 max-w-screen-2xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box xl:w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={logo} alt="" className="w-14" />
            <a className="btn text-white btn-ghost normal-case md:text-lg xl:text-xl font-bold mr-3">
              ShipSwiftly
            </a>
          </div>
          <div className="hidden lg:flex md:gap-9 xl:gap-0 items-center">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex gap-2 items-center mr-2 ">
              <div className="dropdown dropdown-end  ">
                <label tabIndex={0} className="m-1">
                  <div className="">
                    <img
                      src={user?.photoURL}
                      className="rounded-full w-16 h-16 hover:cursor-pointer border-[3px] border-white"
                    />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <h1 className="text-center font-semibold text-lg text-[#474747] border-b-2">
                    {user.displayName}
                  </h1>
                  <div>
                    <li className="text-[#474747] font-semibold  hover:bg-[#474747]  rounded-lg">
                      <Link
                        className="hover:text-gray-300"
                        to={"/dashboard/myProfile"}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="text-[#474747] font-semibold  hover:bg-[#474747]  rounded-lg">
                      <Link
                        onClick={handleLogout}
                        className="hover:text-gray-300"
                      >
                        Logout
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          )}
          {!user && (
            <Link
              to={"/login"}
              className="text-lg font-bold p-3 rounded-lg  text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

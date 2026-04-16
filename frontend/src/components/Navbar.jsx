import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-10 text-sm py-4 mb-5 border-b border-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Clinicly logo"
      />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink to="/" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <span className="py-1">HOME</span>
              {isActive && (
                <span className="h-0.5 w-6 bg-[rgb(var(--color-primary))] rounded-full" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/doctors" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <span className="py-1">ALL DOCTORS</span>
              {isActive && (
                <span className="h-0.5 w-6 bg-[rgb(var(--color-primary))] rounded-full" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <span className="py-1">ABOUT</span>
              {isActive && (
                <span className="h-0.5 w-6 bg-[rgb(var(--color-primary))] rounded-full" />
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <span className="py-1">CONTACT</span>
              {isActive && (
                <span className="h-0.5 w-6 bg-[rgb(var(--color-primary))] rounded-full" />
              )}
            </>
          )}
        </NavLink>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div
            className="relative flex items-center gap-2 cursor-pointer group"
            onClick={() => setShowProfileMenu((prev) => !prev)}
          >
            <img
              className="w-8  rounded-full "
              src={userData.image}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

            {/* Desktop Dropdown */}
            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-50
      ${showProfileMenu ? "block" : "hidden"} md:group-hover:block`}
            >
              <div className="min-w-48 bg-white rounded-lg shadow-lg flex flex-col gap-2 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[rgb(var(--color-primary))] text-white px-6 py-2 rounded-full hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => {
            console.log("menu clicked");
            setShowMenu(true);
          }}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full h-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
              className="w-7"
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "max-[740px]:bg-[rgb(var(--color-primary))] max-[740px]:text-white rounded"
                  : ""
              }
            >
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>

            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive
                  ? "max-[740px]:bg-[rgb(var(--color-primary))] max-[740px]:text-white rounded"
                  : ""
              }
            >
              <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "max-[740px]:bg-[rgb(var(--color-primary))] max-[740px]:text-white rounded"
                  : ""
              }
            >
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "max-[740px]:bg-[rgb(var(--color-primary))] max-[740px]:text-white rounded"
                  : ""
              }
            >
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

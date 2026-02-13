import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Gajjala Vijay Kumar
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-300 ${
                    isActive ? "text-white" : "hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-6">
          <ul className="flex flex-col gap-6 text-gray-300 font-medium">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-white" : "hover:text-white"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

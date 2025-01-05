import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constant/constant";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <>
      <header className="bg-gray-800 h-[15%] shadow-md text-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          {/* Bəzəkli Logo: NM */}
          <Link to="/" className="text-3xl flex font-semibold  hover:text-indigo-600">
            <span className="text-5xl font-extrabold text-gradient bg-clip-text">N</span>
            <span className="text-3xl pt-5 font-bold text-gradient bg-clip-text">m</span>
          </Link>

          {/* Burger Menu */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? "✖️" : "☰"}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="lg:flex space-x-6 hidden">
            {navLinks.map(({ path, nav }) => {
              return (
                <NavLink key={path} to={path} className="hover:text-indigo-600 text-xl font-semibold">
                  {nav}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu (Burger menu opens here) */}
        <div
          className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 w-full bg-blue-600 text-white shadow-md py-4 px-6 z-50`}
        >
          <div className="flex justify-end">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="text-2xl p-2 hover:bg-white"
            >
              ✖️
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-2xl font-semibold items-center">
            {navLinks.map(({ path, nav }, index) => {
              return (
                <React.Fragment key={index}>
                  <NavLink onClick={() => toggleMenu()} to={path}>
                    {nav}
                  </NavLink>
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

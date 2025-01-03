import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLinks = [
    {
      path: "/",
      nav: "Home",
    },
    {
      path: "/about",
      nav: "About",
    },
    {
      path: "/contact",
      nav: "Contact",
    },
    {
      path: "/skills",
      nav: "Skills",
    },
    {
      path: "/projects",
      nav: "Projects",
    },
  ];

  return (
    <header className="bg-blue-600 shadow-md text-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          My Portfolio
        </Link>

        {/* Burger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="lg:flex space-x-6 hidden sticky top-0 z-10">
          {navLinks.map(({ path, nav }) => {
            return (
              <>
                <NavLink to={path}>{nav}</NavLink>
              </>
            );
          })}
        </nav>
      </div>
{/* className="hover:text-blue-600 hover:bg-white w-full p-2 text-center hover:border-b-2 border-white" */}
      {/* Mobile Menu (Burger menu opens here) */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-blue-600 text-white shadow-md py-4 px-6 z-50`}
      >
        <div className="flex justify-end">
          {/* Close Button */}
          <button onClick={toggleMenu} className="text-2xl p-2 hover:bg-white">
            ✖️
          </button>
        </div>
        <nav className="flex flex-col space-y-4 text-2xl font-semibold items-center">
         {
          navLinks.map(({path,nav})=>{
            return(
            <>
            <NavLink onClick={()=>toggleMenu()} to={path}>{nav}</NavLink>           
            </>)
          })
         }
        </nav>
      </div>
    </header>
  );
};

export default Header;

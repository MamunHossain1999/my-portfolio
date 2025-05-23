import React from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import resume from "../../assets/resume.pdf";
import Resume from "../Resume/Resume";

const Navbar = () => {
  return (
    <div className="z-[4000] py-6 w-11/12 mx-auto  bg-black text-white sticky top-0 right-0">
      <div className="relative container flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <span className="ml-2 text-2xl font-serif font-bold tracking-wide text-gray-100 uppercase">
            <span className="text-[#0dccf2] py-1"> M</span> M
            <span className="text-[#0dccf2] py-1"> H</span>
          </span>
        </Link>
        <ul className="lg:flex items-center gap-4 hidden">
          <li>
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, })}
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#0dccf2]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skill"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#0dccf2]"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#0dccf2]"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#0dccf2]"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#0dccf2]"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-medium tracking-wide text-[#0dccf2] transition-colors duration-200"
                  : "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-[#0dccf2]"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <Resume />
          </li>
        </ul>
      </div>
      <Sidebar resume={resume} />
    </div>
  );
};

export default Navbar;

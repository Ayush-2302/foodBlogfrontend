// Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asserts/logo.jpg";

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" z-50 sticky top-0 p-3 bg-gray-900 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="sm:hidden ">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="text-white font-bold text-lg sm:flex  hidden">
          <img className=" w-10 rounded-full" src={logo} alt="logo" />
        </div>

        <div className=" text-base  sm:flex hidden items-center font-bold text-white">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-200 hover:underline mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:underline mr-4"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-200 hover:underline"
          >
            Contact
          </Link>
        </div>
        {!localStorage.getItem("token") ? (
          <div className="flex space-x-2 items-center text-sm">
            <Link to={"/login"}>
              <button className="button">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="button">SignUp</button>
            </Link>
          </div>
        ) : (
          <button className="button " onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden duration-1000 ease-in-out"
        } lg:flex lg:items-center justify-between lg:w-auto`}
      >
        <div className=" text-base lg:flex-grow text-white mx-10 p-2 ">
          <Link
            onClick={toggleNavbar}
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-200 hover:underline mr-4"
          >
            Home
          </Link>
          <Link
            onClick={toggleNavbar}
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 hover:underline mr-4"
          >
            About
          </Link>
          <Link
            onClick={toggleNavbar}
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-gray-200 hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

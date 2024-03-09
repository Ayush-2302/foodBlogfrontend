// Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asserts/logo.jpg"

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
        <div className="text-white font-bold text-lg">
          {isOpen ? "" : <div>
            <img className=" w-10 rounded-full" src={logo} alt="logo" />
            </div>}
        </div>

        <div className=" text-base  flex items-center font-bold text-white">
            <Link
              to="/home"
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

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center justify-between lg:w-auto`}
        >
          <div className=" text-base lg:flex-grow text-white bg-red-300">
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
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        )}

        <div className="lg:hidden">
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
      </div>
    </nav>
  );
};

export default Navbar;

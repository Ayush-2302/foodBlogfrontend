// Loginpage.js
import React, { useContext, useState } from "react";
import { contextFun } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Loginpage = () => {
  const navigate = useNavigate();
  const { login } = useContext(contextFun);
  const [credential, setCrendential] = useState({ email: "", password: "" });
  const port = "https://foodblogbackend.onrender.com";

  const handleLogin = async (e) => {
    // Handle login logic here (e.g., authentication)
    e.preventDefault();
    try {
      const response = await fetch(`${port}/api/auth/login `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      });
      const json = await response.json();
      // console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        setTimeout(() => {
          toast.success("login successfully");
        }, 2000);
        navigate("/");
      } else {
        // alert("Invalid Details");
        toast.error("Invalid Email or Password!");
      }
    } catch (error) {
      console.log(error.message);
    }

    setCrendential({ email: "", password: "" });
  };

  const onChange = (e) => {
    setCrendential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 bg-[#302f2f] rounded shadow-md md:w-1/2 w-11/12">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="current-email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={credential.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={credential.password}
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500  py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;

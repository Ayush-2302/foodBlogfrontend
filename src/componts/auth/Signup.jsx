import React, { useContext, useState } from "react";
import { contextFun } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const port = "https://foodblogbackend.onrender.com";

const Signup = () => {
  const { addUser } = useContext(contextFun);

  const [user, setUser] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, location } = user;
    const response = await fetch(`${port}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, location, email, password }),
    });
    const json = await response.json();
    console.log("user created", user);
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login");

      console.log(user);
      setUser({
        name: "",
        location: "",
        email: "",
        password: "",
      });
      navigate("/login");
      toast.success("Account Created Successfully", "success");
    } else {
      toast.error(" Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-[#302f2f] p-8 rounded shadow-lg md:w-1/2 w-11/12">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              min={3}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              onChange={onChange}
              value={user.name}
              required={true}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-semibold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your location"
              onChange={onChange}
              value={user.location}
            />
          </div>
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
              required
              autoComplete="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              onChange={onChange}
              value={user.email}
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
              name="password"
              id="password"
              required
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              onChange={onChange}
              value={user.password}
            />
          </div>
          <button
            type="button"
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

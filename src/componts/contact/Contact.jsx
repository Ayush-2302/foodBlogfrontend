import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { contextFun } from '../../context/Context';
import { toast } from 'react-toastify';

function Contact() {
  const navigate=useNavigate()
  const { addUser } = useContext(contextFun);

  const [user, setUser] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if(localStorage.getItem('token')){
    }
    else{
      toast.error("Not able to access  without login");
      navigate("/login")
   }
     // eslint-disable-next-line
   }, []);
   const handleSignUp = (e) => {
    e.preventDefault();
    addUser(user.name, user.location, user.email, user.password);
    setUser({
      name: "",
      location: "",
      email: "",
      password: "",
    });
    toast("We we contact you soon !");
  };
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="bg-[#302f2f] p-8 rounded shadow-lg w-1/2">
      <h2 className="text-2xl font-bold mb-6">Contact Us !</h2>
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            onChange={onChange}
            value={user.name}
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
            Number
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your number"
            onChange={onChange}
            value={user.password}
          />
        </div>
        <button
          type="button"
          onClick={handleSignUp}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Contact Us !
        </button>
      </form>
    </div>
  </div>
  )
}

export default Contact
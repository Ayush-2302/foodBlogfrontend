import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserCarosel from "../contact/UserCarosel";
import { toast } from "react-toastify";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      toast.error("Not able to access  without login");
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            About Our Restaurant
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                alt="Restaurant"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to our culinary paradise! We're passionate about
                creating memorable dining experiences for our guests, offering a
                fusion of flavors from around the world served with a touch of
                local charm. Our chefs are dedicated to using fresh, seasonal
                ingredients to craft dishes that delight the senses.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                At our restaurant, we believe that food is not just sustenance,
                but an art form that brings people together. Whether you're
                dining with friends, family, or colleagues, we strive to provide
                exceptional service and a warm atmosphere that makes every meal
                special.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
              alt="Restaurant"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
              alt="Restaurant"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Restaurant"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="p-16">

      <UserCarosel/>

      </div>
    </div>
  );
}

export default About;

// src/components/Landing.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate= useNavigate()
  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Your Website</h2>
          <p className="text-gray-600">
            A brief description of your awesome product or service.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-3 flex-wrap justify-center">
            {/* Feature 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <h3 className="text-xl font-bold mb-2">Feature 1</h3>
              <p className="text-gray-600">
                A description of the first feature.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p className="text-gray-600">
                A description of the second feature.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p className="text-gray-600">
                A description of the third feature.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;

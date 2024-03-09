// Card.js
import React from "react";

const Foodcard = ({name,img,desc}) => {
  return (
    <div className="max-w-md mx-auto bg-[#302f2f] rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={img} // Replace with your image URL
        alt="Card Image"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-400">
         {desc}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Price
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #Quantity
          </span>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;

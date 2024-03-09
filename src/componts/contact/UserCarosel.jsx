import React, { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiDoubleQuotesL,
} from "react-icons/ri";

const UserCarosel = () => {
  const [pic, setPic] = useState(0);
  const handlePrevious = () => {
    setPic(!pic ? Carosel.length - 1 : pic - 1);
  };
  const handleafter = () => {
    setPic((pic + 1) % Carosel.length);
  };
  const Carosel = [
    {
      name: "Brook",
      img: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus tempore repellendus modi repudiandae facilis officiis dicta quod quam pariatur est tenetur voluptates exercitationem iste voluptatem sint velit ipsam cumque.",
    },
    {
      name: "Rohan",
      img: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus tempore repellendus modi repudiandae facilis officiis dicta quod quam pariatur est tenetur voluptates exercitationem iste voluptatem sint velit ipsam cumque.",
    },
    {
      name: "Joy",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      desc: "AYush Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, temporibus tempore repellendus modi repudiandae facilis officiis dicta quod quam pariatur est tenetur voluptates exercitationem iste voluptatem sint velit ipsam cumque.",
    },
  ];

  return (
    <div>
      <div className=" flex items-center gap-4 lg:px-32  sm:10 p-5 pb-10  ">
        <div
          className="previous hidden border-2 rounded-full  md:flex lg:flex justify-center items-center w-8 h-8"
          onClick={handlePrevious}
        >
          <RiArrowLeftSLine className="  text-xl  " />
        </div>

        <div className=" bg-[#29292b] rounded-lg  w-full  p-10  ">
          <div className="coma absolute -translate-x-3">
            <RiDoubleQuotesL className=" text-2xl  text-white" />
          </div>
          {Carosel.map((ele, index) => (
            <>
              <div
                className={`grid lg:grid-cols-2 gap-x-20  h-[90%]  ${
                  index === pic ? "" : "hidden"
                }`}
              >
                <div className="text text-white p-5  ">
                  <p> {ele.desc}</p>
                  <p className=" mt-10">- {ele.name}</p>
                </div>
                <div className=" w-full h-60  rounded-md overflow-hidden  ">
                  <img src={ele.img} alt="user " className={` h-60 rounded-md w-full object-center`} />
                </div>
              </div>
            </>
          ))}
        </div>
        <div
          className="after border-2  hidden md:flex rounded-full lg:flex justify-center items-center w-8 h-8 "
          onClick={handleafter}
        >
          <RiArrowRightSLine className=" text-xl  " />
        </div>
      </div>
    </div>
  );
};

export default UserCarosel;

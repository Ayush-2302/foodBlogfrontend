import React, { useContext, useEffect, useState } from "react";
import Foodcard from "../../layout/cards/Foodcards";
import { useNavigate } from "react-router-dom";
import CarouselBasicExample from "./Carousel";

function Home() {
  const navigate = useNavigate();

  const inital = [];
  const [fcatagory, setFcatagory] = useState(inital);
  const [fitem, setFitem] = useState(inital);
  const loadData = async () => {
    const response = await fetch(
      `https://foodblogbackend.onrender.com/api/displaydata/f_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    // console.log(json[1]);
    setFcatagory(json[1]);
    setFitem(json[0]);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      loadData();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>

    <CarouselBasicExample/>
      <div className="  ">
        {fcatagory !== inital
          ? fcatagory.map((data) => {
              return (
                <>
                  {" "}
                  <div
                    key={data._ID}
                    className=" text-lg font-serif font-bold pl-5"
                  >
                    {data.CategoryName}
                  </div>
                  <hr className=" w-11/12 ml-4 m-2" />
                  <div className=" p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8">
                    {fitem !== inital
                      ? fitem
                          .filter(
                            (filter) =>
                              filter.CategoryName === data.CategoryName
                          )
                          .map((fItem) => {
                            return (
                              <div key={fItem._id} className=" flex ">
                                <Foodcard
                                  name={fItem.name}
                                  img={fItem.img} 
                                  desc={fItem.description}
                                />
                              </div>
                            );
                          })
                      : "data not found"}
                  </div>
                </>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default Home;

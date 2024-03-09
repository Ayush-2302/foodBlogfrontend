import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselBasicExample() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="  relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfDB8MHx8fDA%3D"
              className="block  h-[80vh]    w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-2xl">Burger King   </h5>
              <p>
              "Sink your teeth into our juicy, flame-grilled burger masterpiece, topped with a melty slice of cheese and served on a freshly baked bun. It's burger perfection in every bite!"
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://images.unsplash.com/photo-1704865192176-d15656117a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="block  h-[80vh]   w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-2xl">Spices -Burger King</h5>
              <p>
              "Elevate your dishes with our hand-selected blend of premium spices, meticulously sourced from around the world. From smoky paprika to fragrant cumin, each spice adds depth and flavor to every culinary creation."              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://images.unsplash.com/photo-1704985181792-8006d9086eaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8Mnx8fDI%3D"
              className="block  h-[80vh]  w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Coffee -Burger KIng</h5>
              <p>
              "Savor the rich aroma and robust flavor of our freshly brewed coffee, meticulously roasted to perfection. Whether you prefer a velvety latte, a bold espresso, or a creamy cappuccino, our coffee is sure to awaken your senses and fuel your day."              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}

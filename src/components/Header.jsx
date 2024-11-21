import React from "react";
import backgroundImage from "../assets/images/Rectangle 2.png";

const CoffeeHeroSection = () => {
  return (
    <div
      className="relative h-[800px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-1/2"></div>
      <div className="w-1/2 text-white space-y-5">
        <h1 className="text-white text-4xl">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p>
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="w-[130px] h-[48px] bg-yellow-300 text-black">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CoffeeHeroSection;

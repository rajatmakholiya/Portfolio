import React from "react";
import AbstractBio from "./AbstractBio";

const Abstract = () => {
  return (
    <div className="relative w-full md:h-[83vh] min-h-[500px] bg-[url('https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg')] rounded-xl bg-cover bg-center flex items-center justify-center p-4 ">
      <div className="absolute inset-0 backdrop-blur-md bg-black/10 rounded-xl"></div>
      <div className="relative w-full">
        <AbstractBio />
      </div>
    </div>
  );
};

export default Abstract;
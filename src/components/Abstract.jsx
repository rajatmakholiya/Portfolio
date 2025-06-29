import { Typography } from "@mui/material";
import React from "react";
import AbstractBio from "./AbstractBio";

const Abstract = () => {
  return (
    <div className="relative h-[83vh] mx-4 bg-[url('https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg')] rounded-xl bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-md bg-black/10 rounded-lg"></div>

      <Typography
        variant="h1"
        className="relative text-white text-4xl md:text-6xl font-bold"
      >
        <AbstractBio />
      </Typography>
    </div>
  );
};

export default Abstract;

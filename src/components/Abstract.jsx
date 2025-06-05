import { Typography } from "@mui/material";
import React from "react";
import AbstractBio from "./AbstractBio";

const Abstract = () => {
  return (
    <div className="relative min-h-screen mx-4  bg-[url('https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] rounded-lg bg-cover bg-center flex items-center justify-center">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Container */}
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

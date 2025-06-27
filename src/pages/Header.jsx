import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = ({ setCurrentTheme, currentTheme }) => {
  return (
    <div
      className={`flex w-full justify-between px-4 py-4 col-span-3 ${
        currentTheme === "dark" ? "bg-[#242424]" : "bg-white"
      }`}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Link to="/">
        <Typography variant="h5" fontWeight={500}>
          Rajat Makholiya
        </Typography>
      </Link>

      <div className="flex gap-10">
        <Link to="/">
          <Typography
            variant="h6"
            fontWeight={500}
          
            // onClick={() =>
            //   toast.info("Component Unavailable in this Version", {
            //     autoClose: 3000,
            //     position:"bottom-right",
            //     style: {
            //       width: "105%",
            //       color: currentTheme === "dark" ? "white" : "black",
            //     },
            //   })
            // }
          >
            Bio
          </Typography>
        </Link>
        <Link to="/blogs">
          <Typography variant="h6" fontWeight={500}>
            Blogs
          </Typography>
        </Link>
        <Link to="/experience">
          <Typography variant="h6" fontWeight={500}>
            Experience
          </Typography>
        </Link>
        <Link to="/resume">
          <Typography variant="h6" fontWeight={500}>
            Resume
          </Typography>
        </Link>
        <Link to="/cv">
          <Typography variant="h6" fontWeight={500}>
            CV
          </Typography>
        </Link>
        <Link to="/projects">
          <Typography variant="h6" fontWeight={500}>
            Projects
          </Typography>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <IconButton
          size="small"
          onClick={() =>
            setCurrentTheme(currentTheme === "light" ? "dark" : "light")
          }
        >
          {currentTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;

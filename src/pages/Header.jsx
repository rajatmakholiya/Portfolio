import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setCurrentTheme, currentTheme }) => {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Bio" },
    // { to: "/blogs", label: "Blogs" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/resume", label: "Resume" },
    { to: "/cv", label: "CV" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },

  ];

  return (
    <div className="w-full flex justify-center sticky top-4 z-50">
      <div
        className={`w-11/12 md:w-4/5 lg:w-3/4 flex justify-between items-center px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ${
          currentTheme === "dark"
            ? "bg-black/40 backdrop-blur-lg border border-white/20"
            : "bg-white/40 backdrop-blur-lg border border-black/10"
        }`}
      >
        <Link to="/">
          <Typography variant="h5" fontWeight={500}>
            Rajat Makholiya
          </Typography>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? (currentTheme === "dark" ? "bg-white/20 text-white" : "bg-black/10 text-black")
                    : (currentTheme === "dark" ? "text-gray-300 hover:bg-white/10" : "text-gray-700 hover:bg-black/5")
                }`}
              >
                <Typography variant="body1" fontWeight={500}>
                  {link.label}
                </Typography>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-5">
          <IconButton
            size="small"
            onClick={() =>
              setCurrentTheme(currentTheme === "light" ? "dark" : "light")
            }
          >
            {currentTheme === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
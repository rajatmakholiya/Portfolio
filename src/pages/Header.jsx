import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ setCurrentTheme, currentTheme }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Bio" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/resume", label: "Resume" },
    { to: "/cv", label: "CV" },
    { to: "/projects", label: "Projects" },
    { to: "/certifications", label: "Certifications" },
  ];

  const themeIconColor = currentTheme === "dark" ? "white" : "black";

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full flex justify-center sticky top-4 z-50">
      {/* Header Bar */}
      <div
        className={`w-11/12 md:w-4/5 lg:w-3/4 flex justify-between items-center px-4 sm:px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ${
          currentTheme === "dark"
            ? "bg-black/40 backdrop-blur-lg border border-white/20"
            : "bg-white/40 backdrop-blur-lg border border-black/10"
        }`}
      >
        {/* Logo/Name */}
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Typography variant="h5" fontWeight={500}>
            Rajat Makholiya
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? currentTheme === "dark"
                      ? "bg-white/20 text-white"
                      : "bg-black/10 text-black"
                    : currentTheme === "dark"
                    ? "text-gray-300 hover:bg-white/10"
                    : "text-gray-700 hover:bg-black/5"
                }`}
              >
                <Typography variant="body1" fontWeight={500}>
                  {link.label}
                </Typography>
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle and Mobile Menu Icon */}
        <div className="flex items-center gap-2">
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

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <CloseIcon style={{ color: themeIconColor }} />
              ) : (
                <MenuIcon style={{ color: themeIconColor }} />
              )}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className={`md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full p-4 rounded-2xl shadow-xl ${
              currentTheme === "dark"
                ? "bg-black/80 backdrop-blur-lg border border-white/20"
                : "bg-white/80 backdrop-blur-lg border border-black/10"
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                    className={`w-full text-center px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? currentTheme === "dark"
                          ? "bg-white/20 text-white"
                          : "bg-black/10 text-black"
                        : currentTheme === "dark"
                        ? "text-gray-300 hover:bg-white/10"
                        : "text-gray-700 hover:bg-black/5"
                    }`}
                  >
                    <Typography variant="body1" fontWeight={500}>
                      {link.label}
                    </Typography>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
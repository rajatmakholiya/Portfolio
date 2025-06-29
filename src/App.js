import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./pages/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Info } from "lucide-react";
import Blogs from "./pages/Blogs";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import WD from "./components/WD";
import DevOps from "./components/Devops";
import AIML from "./components/AIML";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";


function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
        },
        palette: {
          mode: currentTheme,
          ...(currentTheme === "dark"
            ? {
                background: {
                  default: "#242424",
                  paper: "#1E1E1E",
                },
                primary: {
                  main: "#90caf9",
                },
                secondary: {
                  main: "#f48fb1",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#b0bec5",
                },
              }
            : {
                background: {
                  default: "white",
                  paper: "#ffffff",
                },
                primary: {
                  main: "#1976d2",
                },
                secondary: {
                  main: "#dc004e",
                },
                text: {
                  primary: "#000000",
                  secondary: "#333333",
                },
              }),
        },
      }),
    [currentTheme]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex flex-col h-screen gap-3">
          <Header
            setCurrentTheme={setCurrentTheme}
            currentTheme={currentTheme}
          />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/experience" element={<Experience />} />
              <Route
                path="/resume"
                element={<Resume currentTheme={currentTheme} />}
              />
              <Route
                path="/resume/wd"
                element={<WD currentTheme={currentTheme} />}
              />
              <Route
                path="/resume/devops"
                element={<DevOps currentTheme={currentTheme} />}
              />
              <Route
                path="/resume/aiml"
                element={<AIML currentTheme={currentTheme} />}
              />
              <Route path="/cv" element={<CV currentTheme={currentTheme} />} />
              <Route
                path="/projects"
                element={<Projects />}
              />
              <Route
                path="/certifications"
                element={<Certifications />}
              />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
      <ToastContainer
        theme={currentTheme}
        draggable
        hideProgressBar={true}
        icon={<Info className="stroke-indigo-400" />}
      />
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Info } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import WD from "./components/WD";
import DevOps from "./components/Devops";
import AIML from "./components/AIML";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Footer from "./components/Footer";
import PageTransition from "./components/sub-components/PageTransition";
import Skills from "./pages/Skills";

const AppRoutes = ({ currentTheme }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/blogs"
          element={
            <PageTransition>
              <Blogs />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <Experience />
            </PageTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <PageTransition>
              <Resume currentTheme={currentTheme} />
            </PageTransition>
          }
        />
        <Route
          path="/resume/wd"
          element={
            <PageTransition>
              <WD currentTheme={currentTheme} />
            </PageTransition>
          }
        />
        <Route
          path="/resume/devops"
          element={
            <PageTransition>
              <DevOps currentTheme={currentTheme} />
            </PageTransition>
          }
        />
        <Route
          path="/resume/aiml"
          element={
            <PageTransition>
              <AIML currentTheme={currentTheme} />
            </PageTransition>
          }
        />
        <Route
          path="/cv"
          element={
            <PageTransition>
              <CV currentTheme={currentTheme} />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <Skills currentTheme={currentTheme} />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/certifications"
          element={
            <PageTransition>
              <Certifications />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

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
        <div className="flex flex-col min-h-screen">
          <Header
            setCurrentTheme={setCurrentTheme}
            currentTheme={currentTheme}
          />
          <main className="flex-1 flex flex-col my-10">
            <AppRoutes currentTheme={currentTheme} />
          </main>
          <Footer currentTheme={currentTheme} />
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

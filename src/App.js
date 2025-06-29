// import React, { useState, useMemo } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Header from "./pages/Header";
// import Home from "./pages/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Info } from "lucide-react";
// import Blogs from "./pages/Blogs";
// import Experience from "./pages/Experience";
// import Resume from "./pages/Resume";
// import WD from "./components/WD";
// import DevOps from "./components/Devops";
// import AIML from "./components/AIML";
// import CV from "./pages/CV";
// import Projects from "./pages/Projects";
// import Certifications from "./pages/Certifications";
// import Footer from "./components/Footer";

// function App() {
//   const [currentTheme, setCurrentTheme] = useState("dark");

//   return (
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="flex flex-col min-h-screen gap-3">
//           <Header
//             setCurrentTheme={setCurrentTheme}
//             currentTheme={currentTheme}
//           />
//           <div className="flex-1 overflow-auto my-5">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/blogs" element={<Blogs />} />
//               <Route path="/experience" element={<Experience />} />
//               <Route
//                 path="/resume"
//                 element={<Resume currentTheme={currentTheme} />}
//               />
//               <Route
//                 path="/resume/wd"
//                 element={<WD currentTheme={currentTheme} />}
//               />
//               <Route
//                 path="/resume/devops"
//                 element={<DevOps currentTheme={currentTheme} />}
//               />
//               <Route
//                 path="/resume/aiml"
//                 element={<AIML currentTheme={currentTheme} />}
//               />
//               <Route path="/cv" element={<CV currentTheme={currentTheme} />} />
//               <Route
//                 path="/projects"
//                 element={<Projects />}
//               />
//               <Route
//                 path="/certifications"
//                 element={<Certifications />}
//               />
//             </Routes>
//           </div>
//           <Footer currentTheme={currentTheme} />
//         </div>
//       </ThemeProvider>
//       <ToastContainer
//         theme={currentTheme}
//         draggable
//         hideProgressBar={true}
//         icon={<Info className="stroke-indigo-400" />}
//       />
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./pages/Header";
// 1. Import useLocation for AnimatePresence
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Info } from "lucide-react";

// 2. Import AnimatePresence and your new component
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
    // You need BrowserRouter here to provide context for useLocation in AppRoutes
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex flex-col min-h-screen">
          <Header
            setCurrentTheme={setCurrentTheme}
            currentTheme={currentTheme}
          />
          <main className="flex-1 flex flex-col my-10">
            {/* Render the AppRoutes component */}
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

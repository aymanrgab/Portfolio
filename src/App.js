import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";
import projectsData from "./data/projects.json";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

const App = () => {
  const [projects, setProjects] = useState([]);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    setProjects(projectsData);
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className={`app ${theme}`}>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <About />
                    <Skills />
                    <Projects projects={projects} />
                  </>
                } />
                <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
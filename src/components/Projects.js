import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = ({ projects }) => {
  const [viewMode, setViewMode] = useState("compact"); 
  const [filter, setFilter] = useState("All");

  const toggleViewMode = () => {
    setViewMode(viewMode === "compact" ? "gallery" : "compact");
  };

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-header">
        <h2><i className="fas fa-project-diagram"></i> Projects</h2>
        <div className="projects-controls">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="project-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button onClick={toggleViewMode} className="view-toggle">
            {viewMode === "compact" ? "Gallery View" : "Compact View"}
          </button>
        </div>
      </div>
      <motion.div 
        className={`projects-container ${viewMode}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {filteredProjects.map(project => (
          <motion.div 
            key={project.id} 
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="project-thumbnail">
              <LazyLoadImage
                src={`/images/${project.id}-thumbnail.jpg`}
                alt={project.title}
                effect="blur"
                width="100%"
                height="200px"
              />
            </div>
            <div className="project-info">
              <h3><i className={project.icon}></i> {project.title}</h3>
              {viewMode === "compact" && <p>{project.description}</p>}
              <Link to={`/project/${project.id}`} className="project-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
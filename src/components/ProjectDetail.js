import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return <div>Project not found</div>;

  const renderVisualization = () => {
    if (!project.visualizationData || project.visualizationData.length === 0) {
      return <p>No visualization data available for this project.</p>;
    }

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={project.visualizationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: project.xAxisLabel, position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: project.yAxisLabel, angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section className="project-details" >
      <h2><i className={project.icon}></i> {project.title}</h2>
      
      <div className="project-tabs" style={{ display: 'flex', justifyContent: 'center' }}>
        <button 
          className={activeTab === 'overview' ? 'active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'details' ? 'active' : ''} 
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button 
          className={activeTab === 'visualization' ? 'active' : ''} 
          onClick={() => setActiveTab('visualization')}
        >
          Visualization
        </button>
      </div>
      
      {activeTab === 'overview' && (
        <div className="project-overview">
          <p>{project.fullDescription}</p>
          <h3>Technologies Used</h3>
          <ul className="tech-list">
            {project.technologies.map((tech, index) => (
              <li key={index} className="tech-item">{tech}</li>
            ))}
          </ul>
        </div>
      )}
      
      {activeTab === 'details' && (
        <div className="project-details-content">
          <h3>Key Findings</h3>
          <ul>
            {project.keyFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </div>
      )}
      
      {activeTab === 'visualization' && (
        <div className="project-visualization">
          <h3>Data Visualization</h3>
          {renderVisualization()}
          <p>{project.visualizationDescription || "This visualization represents key data from the project."}</p>
        </div>
      )}
      
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project <i className="fas fa-external-link-alt"></i>
      </a>
      
      <Link to="/" className="back-to-main" style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
        <i className="fas fa-arrow-left"></i> Back to Portfolio
      </Link>
    </section>
  );
};

export default ProjectDetail;
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(true);

  const skillCategories = [
    { name: 'Programming', color: '#FF6384' },
    { name: 'Data Science', color: '#36A2EB' },
    { name: 'Machine Learning', color: '#FFCE56' },
    { name: 'Tools & Platforms', color: '#4BC0C0' },
  ];

  const skills = [
    { name: 'Python', category: 'Programming', level: 90 },
    { name: 'R', category: 'Programming', level: 80 },
    { name: 'SQL', category: 'Programming', level: 85 },
    { name: 'Data Analysis', category: 'Data Science', level: 90 },
    { name: 'Data Visualization', category: 'Data Science', level: 85 },
    { name: 'Statistical Analysis', category: 'Data Science', level: 80 },
    { name: 'Machine Learning', category: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', category: 'Machine Learning', level: 75 },
    { name: 'NLP', category: 'Machine Learning', level: 80 },
    { name: 'TensorFlow', category: 'Tools & Platforms', level: 80 },
    { name: 'PyTorch', category: 'Tools & Platforms', level: 75 },
    { name: 'Git', category: 'Tools & Platforms', level: 95 },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.section 
      id="skills" 
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-header" onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <h2><i className="fas fa-cogs"></i> Skills</h2>
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="skill-categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <button 
                className={`category-button ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
              {skillCategories.map(category => (
                <button 
                  key={category.name}
                  className={`category-button ${activeCategory === category.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.name)}
                  style={{backgroundColor: category.color}}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            <motion.div 
              className="skills-chart"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={filteredSkills}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Skills" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div 
              className="skills-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {filteredSkills.map(skill => (
                <motion.div 
                  key={skill.name} 
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-level" 
                      style={{
                        width: `${skill.level}%`, 
                        backgroundColor: skillCategories.find(cat => cat.name === skill.category).color
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Skills;
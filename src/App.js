import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setCurrentPage('project');
  };

  const handleBackClick = () => {
    setCurrentPage('home');
    setSelectedProject(null);
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage onProjectClick={handleProjectClick} />
      ) : (
        <ProjectPage projectId={selectedProject} onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default App;

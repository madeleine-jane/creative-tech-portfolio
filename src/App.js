import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ConceptViewer from './components/ConceptViewer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setCurrentPage('project');
  };

  const handleConceptClick = (conceptId) => {
    setSelectedConcept(conceptId);
    setCurrentPage('concept');
  };

  const handleBackClick = () => {
    setCurrentPage('project');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    setSelectedConcept(null);
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage onProjectClick={handleProjectClick} />
      ) : currentPage === 'concept' ? (
        <ConceptViewer conceptId={selectedConcept} onBackClick={handleBackClick} />
      ) : (
        <ProjectPage
          projectId={selectedProject}
          onBackClick={handleBackToHome}
          onConceptClick={handleConceptClick}
        />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './HomePage.css';

function HomePage({ onProjectClick }) {
    const projects = [
        { id: 'technology-tinder', title: 'Technology Tinder' },
        { id: 'idc1-ideation', title: 'IDC1 Ideation' },
        { id: 'idc1-project', title: 'IDC1 Project' },
        { id: 'enclosures', title: 'Enclosures' },
        { id: 'motor-buffet', title: 'Motor Buffet' },
        { id: 'idc2-ideation', title: 'IDC2 Ideation' },
        { id: 'idc2-project', title: 'IDC2 Project' },
    ];

    return (
        <div className="home-page">
            <div className="home-container">
                <header className="home-header">
                    <h1>Creative Technology Portfolio</h1>
                </header>

                <div className="projects-grid">
                    {projects.map(project => (
                        <button
                            key={project.id}
                            className="project-card"
                            onClick={() => onProjectClick(project.id)}
                        >
                            <h2>{project.title}</h2>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

import React from 'react';
import './ProjectPage.css';
import TechnologyTinder from '../pages/TechnologyTinder';
import IDC1Ideation from '../pages/IDC1Ideation';
import IDC1Project from '../pages/IDC1Project';
import Enclosures from '../pages/Enclosures';
import MotorBuffet from '../pages/MotorBuffet';
import IDC2Ideation from '../pages/IDC2Ideation';
import IDC2Project from '../pages/IDC2Project';

function ProjectPage({ projectId, onBackClick, onConceptClick }) {
    const projectComponents = {
        'technology-tinder': <TechnologyTinder />,
        'idc1-ideation': <IDC1Ideation onConceptClick={onConceptClick} />,
        'idc1-project': <IDC1Project />,
        'enclosures': <Enclosures />,
        'motor-buffet': <MotorBuffet />,
        'idc2-ideation': <IDC2Ideation />,
        'idc2-project': <IDC2Project />,
    };

    const component = projectComponents[projectId];

    return (
        <div className="project-page">
            <button className="back-button" onClick={onBackClick}>
                ← Back to Home
            </button>
            {component || <p className="error">Project not found</p>}
        </div>
    );
}

export default ProjectPage;

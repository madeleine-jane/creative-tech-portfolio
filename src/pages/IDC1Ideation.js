import React from 'react';
import '../styles/ConceptButtons.css';

function IDC1Ideation({ onConceptClick }) {
    const concepts = [
        { id: 'idc_1_concept_1', title: 'Concept 1' },
        { id: 'idc_1_concept_2', title: 'Concept 2' },
        { id: 'idc_1_concept_3', title: 'Concept 3' },
    ];

    return (
        <div className="project-content">
            <h1>IDC1 Ideation</h1>

            <div className="concepts-grid">
                {concepts.map(concept => (
                    <button
                        key={concept.id}
                        className="concept-card"
                        onClick={() => onConceptClick && onConceptClick(concept.id)}
                    >
                        <h2>{concept.title}</h2>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default IDC1Ideation;

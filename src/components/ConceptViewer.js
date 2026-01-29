import React from 'react';
import './ConceptViewer.css';

function ConceptViewer({ conceptId, onBackClick }) {
    return (
        <div className="concept-viewer">
            <button className="back-button" onClick={onBackClick}>
                ← Back
            </button>
            <div className="concept-image-container">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${conceptId}.png`}
                    alt={conceptId}
                    className="concept-image"
                />
            </div>
        </div>
    );
}

export default ConceptViewer;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ProjectPage.css';

function ProjectPage({ projectId, onBackClick }) {
    const [markdown, setMarkdown] = React.useState('');
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const projectMap = {
            'technology-tinder': '/projects/technology-tinder.md',
            'idc1-ideation': '/projects/idc1-ideation.md',
            'idc1-project': '/projects/idc1-project.md',
            'enclosures': '/projects/enclosures.md',
            'motor-buffet': '/projects/motor-buffet.md',
            'idc2-ideation': '/projects/idc2-ideation.md',
            'idc2-project': '/projects/idc2-project.md',
        };

        if (projectMap[projectId]) {
            const url = `${process.env.PUBLIC_URL}${projectMap[projectId]}`;
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error('Failed to load');
                    return response.text();
                })
                .then(text => setMarkdown(text))
                .catch(err => setError('Failed to load project'));
        } else {
            setError('Project not found');
        }
    }, [projectId]);

    return (
        <div className="project-page">
            <button className="back-button" onClick={onBackClick}>
                ← Back to Home
            </button>
            <div className="project-content">
                {error ? (
                    <p className="error">{error}</p>
                ) : (
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                )}
            </div>
        </div>
    );
}

export default ProjectPage;

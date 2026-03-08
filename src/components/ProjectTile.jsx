import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ACCENT, FONT_TITLE, FONT_BODY } from '../styles/tokens.js'

export default function ProjectTile({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        width: '100%',
        height: index === 0 ? '48vh' : '36vh',
        cursor: 'pointer',
        borderBottom: '1px solid rgba(28,28,28,0.1)',
        overflow: 'hidden',
      }}
    >
      {/* Left: text panel */}
      <div style={{
        width: '42%',
        flexShrink: 0,
        background: '#f7f6f3',
        padding: '3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRight: '1px solid rgba(28,28,28,0.08)',
      }}>
        <h2 style={{
          fontFamily: FONT_TITLE,
          fontSize: 'clamp(1.8rem, 3.2vw, 3.8rem)',
          letterSpacing: '0.04em',
          lineHeight: 0.95,
          color: '#1c1c1c',
          marginBottom: '1rem',
          textTransform: 'lowercase',
        }}>
          {project.title}
        </h2>

        <p style={{
          fontFamily: FONT_BODY,
          fontSize: '0.9rem',
          fontWeight: 300,
          color: 'rgba(28,28,28,0.65)',
          maxWidth: '380px',
          lineHeight: 1.65,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.3s, transform 0.3s',
        }}>
          {project.excerpt}
        </p>

        <div style={{
          marginTop: '1.25rem',
          fontFamily: FONT_BODY,
          fontSize: '0.75rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: ACCENT,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'opacity 0.3s 0.05s, transform 0.3s 0.05s',
        }}>
          View Project →
        </div>
      </div>

      {/* Right: image panel */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${project.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        }} />
      </div>
    </div>
  )
}

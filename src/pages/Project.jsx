import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'
import { ACCENT, FONT_TITLE, FONT_BODY } from '../styles/tokens.js'

export default function Project() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  const audioRef = useRef(null)
  useEffect(() => {
    if (!project?.audioSrc) return
    const audio = new Audio(project.audioSrc)
    audio.loop = true
    audio.volume = 0.5
    audio.play().catch(() => {})
    audioRef.current = audio
    return () => { audio.pause(); audio.src = '' }
  }, [project?.audioSrc])

  if (!project) {
    return (
      <div style={{ background: '#f7f6f3', minHeight: '100vh' }}>
        <Nav />
        <div style={{
          padding: '14rem 2.5rem',
          fontFamily: FONT_BODY,
          color: '#888',
          textAlign: 'center',
        }}>
          Project not found.
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ background: '#f7f6f3', minHeight: '100vh' }}>
      <Nav />

      {/* Title */}
      <div style={{
        padding: '6rem 2.5rem 2rem',
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#888',
            fontFamily: FONT_BODY,
            fontSize: '0.78rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '6rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.color = ACCENT}
          onMouseLeave={e => e.currentTarget.style.color = '#888'}
        >
          ← All Work
        </button>
        <h1 style={{
          fontFamily: FONT_TITLE,
          fontSize: 'clamp(4rem, 12vw, 6rem)',
          letterSpacing: '0.04em',
          lineHeight: 1,
          color: '#1c1c1c',
          textTransform: 'lowercase',
        }}>
          {project.title}
        </h1>
      </div>

      {/* Article */}
      <article style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '5rem 2.5rem 6rem',
      }}>

        {/* Markdown content */}
        <ReactMarkdown
          components={{
            h1: () => null, // title already shown in hero
            h2: ({ children }) => (
              <h2 style={{
                fontFamily: FONT_TITLE,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                color: '#1c1c1c',
                marginTop: '3.5rem',
                marginBottom: '1rem',
              }}>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 style={{
                fontFamily: FONT_TITLE,
                fontSize: '1.3rem',
                letterSpacing: '0.04em',
                color: '#1c1c1c',
                marginTop: '2.5rem',
                marginBottom: '0.75rem',
              }}>{children}</h3>
            ),
            p: ({ children }) => (
              <p style={{
                fontFamily: FONT_BODY,
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(28,28,28,0.82)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}>{children}</p>
            ),
            img: ({ src, alt }) => {
              const isVideo = src && /\.(mov|mp4|webm)$/i.test(src)
              const figureStyle = {
                large:  { margin: '3rem -8rem' },
                medium: { margin: '3rem 0' },
                small:  { margin: '2rem 0', maxWidth: '65%' },
              }[project.imageSize ?? 'large']
              return (
                <figure style={figureStyle}>
                  {isVideo ? (
                    <video
                      src={src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', display: 'block' }}
                    />
                  ) : (
                    <img
                      src={src}
                      alt={alt}
                      style={{ width: '100%', display: 'block' }}
                    />
                  )}
                  {alt && (
                    <figcaption style={{
                      fontFamily: FONT_BODY,
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#888',
                      marginTop: '0.75rem',
                      paddingLeft: '2rem',
                    }}>{alt}</figcaption>
                  )}
                </figure>
              )
            },
            a: ({ href, children }) => (
              <a
                href={href}
                style={{ color: ACCENT, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >{children}</a>
            ),
            ul: ({ children }) => (
              <ul style={{
                fontFamily: FONT_BODY,
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(28,28,28,0.82)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                paddingLeft: '1.5rem',
              }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{
                fontFamily: FONT_BODY,
                fontSize: '1.05rem',
                fontWeight: 300,
                color: 'rgba(28,28,28,0.82)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
                paddingLeft: '1.5rem',
              }}>{children}</ol>
            ),
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: `3px solid ${ACCENT}`,
                paddingLeft: '1.5rem',
                margin: '2rem 0',
                fontStyle: 'italic',
                color: '#888',
              }}>{children}</blockquote>
            ),
          }}
        >
          {project.content}
        </ReactMarkdown>

      </article>

      <Footer />
    </div>
  )
}

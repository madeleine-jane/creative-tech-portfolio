import Nav from '../components/Nav.jsx'
import ProjectTile from '../components/ProjectTile.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'

import { ACCENT, FONT_TITLE, FONT_BODY } from '../styles/tokens.js'

export default function Home() {
  return (
    <div style={{ background: '#f7f6f3', minHeight: '100vh' }}>
      <Nav />

      {/* Header — black band, continuous with nav */}
      <header style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '6rem',
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        background: '#0a0a0a',
      }}>
        <h1 style={{
          fontFamily: FONT_TITLE,
          fontSize: 'clamp(4rem, 12vw, 6rem)',
          lineHeight: 1,
          color: '#f5f5f0',
        }}>
          creative<br />technology<br />portfolio
        </h1>
      </header>

      {/* Project tiles */}
      <main>
        {projects.map((project, index) => (
          <ProjectTile key={project.slug} project={project} index={index} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import { ACCENT, FONT_TITLE, FONT_BODY } from '../styles/tokens.js'

export default function Nav() {
  const navigate = useNavigate()

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2.5rem',
      background: ACCENT,
      borderBottom: '1px solid rgba(245,245,240,0.08)',
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: FONT_TITLE,
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          color: '#f5f5f0',
          padding: 0,
        }}
      >
        Madeleine Andersen
      </button>
      <span style={{
        fontFamily: FONT_BODY,
        fontSize: '0.8rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#f5f5f0',
      }}>
        Creative Technology Portfolio
      </span>
    </nav>
  )
}

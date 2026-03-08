import { ACCENT, FONT_BODY } from '../styles/tokens.js'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(28,28,28,0.1)',
      padding: '2rem 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: FONT_BODY,
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
      color: '#888',
      background: '#f7f6f3',
    }}>
      <span>© {new Date().getFullYear()} Madeleine Andersen</span>
      <span style={{ color: ACCENT, opacity: 0.7 }}>Creative Technology</span>
    </footer>
  )
}

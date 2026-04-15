import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{position:'sticky',top:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.2rem 2.5rem',background:'rgba(245,242,237,0.92)',borderBottom:'0.5px solid rgba(15,15,15,0.1)',backdropFilter:'blur(12px)'}}>
      <Link to="/" style={{fontFamily:"'Acids', sans-serif",fontSize:'1.8rem',color:'#0f0f0f',textDecoration:'none',letterSpacing:'0.05em',outline:'none'}}>Vanegas</Link>
      <div style={{display:'flex',gap:'2rem'}}>
        <Link to="/music" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Music</Link>
        <Link to="/beats" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Beats</Link>
        <Link to="/about" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>About</Link>
        <Link to="/licensing" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Licensing</Link>
        <Link to="/contact" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Contact</Link>
      </div>
      <Link to="/beats" style={{fontSize:'0.75rem',letterSpacing:'0.1em',textTransform:'uppercase',padding:'0.5rem 1.2rem',border:'0.5px solid rgba(15,15,15,0.3)',borderRadius:'2px',color:'#0f0f0f',textDecoration:'none'}}>Browse Beats</Link>
    </nav>
  )
}
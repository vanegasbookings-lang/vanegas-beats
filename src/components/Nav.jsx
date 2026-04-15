import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{position:'sticky',top:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.2rem 1.5rem',background:'rgba(245,242,237,0.92)',borderBottom:'0.5px solid rgba(15,15,15,0.1)',backdropFilter:'blur(12px)'}}>
        <Link to="/" style={{fontFamily:"'Acids', sans-serif",fontSize:'1.8rem',color:'#0f0f0f',textDecoration:'none',letterSpacing:'0.05em',outline:'none'}}>Vanegas</Link>
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
          <div className="desktop-nav" style={{display:'flex',gap:'2rem'}}>
            <Link to="/music" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Music</Link>
            <Link to="/beats" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Beats</Link>
            <Link to="/about" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>About</Link>
            <Link to="/licensing" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Licensing</Link>
            <Link to="/contact" style={{fontSize:'0.78rem',color:'rgba(15,15,15,0.5)',textDecoration:'none',letterSpacing:'0.1em',textTransform:'uppercase'}}>Contact</Link>
          </div>
          <button onClick={() => setOpen(!open)} className="mobile-menu" style={{background:'none',border:'none',cursor:'pointer',display:'none',flexDirection:'column',gap:'5px',padding:'4px'}}>
            <span style={{display:'block',width:'22px',height:'2px',background:'#0f0f0f'}}></span>
            <span style={{display:'block',width:'22px',height:'2px',background:'#0f0f0f'}}></span>
            <span style={{display:'block',width:'22px',height:'2px',background:'#0f0f0f'}}></span>
          </button>
        </div>
      </nav>

      {open && (
        <div style={{position:'fixed',inset:0,background:'rgba(245,242,237,0.98)',zIndex:99,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2.5rem'}}>
          <button onClick={() => setOpen(false)} style={{position:'absolute',top:'1.5rem',right:'1.5rem',background:'none',border:'none',fontSize:'1.5rem',cursor:'pointer',color:'#0f0f0f'}}>✕</button>
          {[['/',  'Home'],['/music','Music'],['/beats','Beats'],['/about','About'],['/licensing','Licensing'],['/contact','Contact']].map(([path,label]) => (
            <Link key={path} to={path} onClick={() => setOpen(false)} style={{fontSize:'2rem',fontWeight:600,color:'#0f0f0f',textDecoration:'none',letterSpacing:'0.05em',fontFamily:"'Space Grotesk', sans-serif"}}>{label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  )
}
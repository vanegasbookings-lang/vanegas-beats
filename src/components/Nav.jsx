import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <nav style={{position:'sticky',top:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.2rem 2.5rem',background:'rgba(245,242,237,0.97)',borderBottom:'0.5px solid rgba(15,15,15,0.12)',backdropFilter:'blur(12px)'}}>
        <Link to="/" style={{fontFamily:"'Acids', sans-serif",fontSize:'1.8rem',color:'#0f0f0f',textDecoration:'none',letterSpacing:'0.05em',outline:'none'}}>Vanegas</Link>
        <div style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
          <div className="desktop-nav" style={{display:'flex',gap:'2rem'}}>
            {[
              ['/music','Music'],
              ['/beats','Beats'],
              ['/about','About'],
              ['/licensing','Licensing'],
              ['/contact','Contact'],
            ].map(([path,label]) => (
              <Link key={path} to={path} style={{
                fontSize:'0.82rem',
                color: location.pathname === path ? '#0f0f0f' : 'rgba(15,15,15,0.55)',
                textDecoration:'none',
                letterSpacing:'0.08em',
                textTransform:'uppercase',
                fontWeight: location.pathname === path ? 600 : 400,
                borderBottom: location.pathname === path ? '1.5px solid #b8933f' : '1.5px solid transparent',
                paddingBottom:'2px',
                transition:'all 0.15s'
              }}>{label}</Link>
            ))}
          </div>
          <Link to="/beats" className="desktop-nav" style={{fontSize:'0.75rem',letterSpacing:'0.1em',textTransform:'uppercase',padding:'0.55rem 1.3rem',background:'#0f0f0f',color:'#f5f2ed',borderRadius:'2px',textDecoration:'none',fontWeight:600}}>Get Beats</Link>
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
          {[['/', 'Home'],['/music','Music'],['/beats','Beats'],['/about','About'],['/licensing','Licensing'],['/contact','Contact']].map(([path,label]) => (
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
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.2rem 2.5rem',background:'rgba(245,242,237,0.97)',borderBottom:'0.5px solid rgba(15,15,15,0.12)',backdropFilter:'blur(12px)'}}>
        <Link to="/" style={{fontFamily:"'Acids', sans-serif",fontSize:'1.8rem',color:'#0f0f0f',textDecoration:'none',letterSpacing:'0.05em',outline:'none'}}>Beats by Vanegas</Link>
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
          <button onClick={() => setOpen(!open)} className="mobile-menu" style={{background:'none',border:'none',cursor:'pointer',display:'none',flexDirection:'column',gap:'5px',padding:'4px',zIndex:200}}>
            <span style={{display:'block',width:'22px',height:'2px',background:'#0f0f0f',transition:'all 0.3s'}}></span>
            <span style={{display:'block',width:'22px',height:'2px',background:'#0f0f0f',transition:'all 0.3s'}}></span>
            <span style={{display:'block',width:'22px',height:'2px',background:'#0f0f0f',transition:'all 0.3s'}}></span>
          </button>
        </div>
      </nav>

      <div style={{height:'72px'}}></div>

      <div style={{
        position:'fixed',
        top:0,
        right: open ? '0' : '-100%',
        width:'75%',
        maxWidth:'320px',
        height:'100vh',
        background:'#f5f2ed',
        zIndex:150,
        display:'flex',
        flexDirection:'column',
        padding:'5rem 2.5rem 2.5rem',
        gap:'2rem',
        boxShadow: open ? '-8px 0 32px rgba(15,15,15,0.1)' : 'none',
        transition:'right 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <button onClick={() => setOpen(false)} style={{position:'absolute',top:'1.5rem',right:'1.5rem',background:'none',border:'none',fontSize:'1.2rem',cursor:'pointer',color:'rgba(15,15,15,0.5)'}}>✕</button>
        {[['/', 'Home'],['/music','Music'],['/beats','Beats'],['/about','About'],['/licensing','Licensing'],['/contact','Contact']].map(([path,label]) => (
          <Link key={path} to={path} onClick={() => setOpen(false)} style={{
            fontSize:'1.5rem',
            fontWeight:600,
            color: location.pathname === path ? '#b8933f' : '#0f0f0f',
            textDecoration:'none',
            letterSpacing:'0.02em',
            fontFamily:"'Space Grotesk', sans-serif",
            borderBottom:'0.5px solid rgba(15,15,15,0.08)',
            paddingBottom:'1rem'
          }}>{label}</Link>
        ))}
        <div style={{marginTop:'auto',fontSize:'0.72rem',color:'rgba(15,15,15,0.35)'}}>beatsbyvanegas.com</div>
      </div>

      {open && (
        <div onClick={() => setOpen(false)} style={{position:'fixed',inset:0,background:'rgba(15,15,15,0.4)',zIndex:140,transition:'opacity 0.3s'}}/>
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
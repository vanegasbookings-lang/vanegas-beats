import micBg from '../assets/mic.jpg'

export default function Contact() {
  return (
    <main style={{minHeight:'100vh',color:'#f5f2ed',fontFamily:"'Space Grotesk', sans-serif",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'6rem 2.5rem',position:'relative',backgroundImage:`url(${micBg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
      <div style={{position:'absolute',inset:0,background:'rgba(10,10,10,0.75)'}}></div>
      <div style={{position:'relative',zIndex:1}}>
        <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Ready to create</div>
        <h1 style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:600,letterSpacing:'-0.02em',marginBottom:'0.75rem'}}>Let's build your<br/>next record.</h1>
        <p style={{fontSize:'0.85rem',color:'rgba(245,242,237,0.55)',letterSpacing:'0.14em',textTransform:'uppercase',marginBottom:'2.5rem'}}>Serious artists only.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap',marginBottom:'3rem'}}>
          <a href="mailto:vanegas@beatsbyvanegas.com" style={{padding:'0.85rem 2rem',background:'#f5f2ed',color:'#0f0f0f',fontSize:'0.8rem',letterSpacing:'0.1em',textTransform:'uppercase',borderRadius:'2px',textDecoration:'none',fontWeight:500}}>Contact</a>
          <a href="https://instagram.com" target="_blank" style={{padding:'0.85rem 2rem',background:'transparent',color:'#f5f2ed',fontSize:'0.8rem',letterSpacing:'0.1em',textTransform:'uppercase',border:'0.5px solid rgba(245,242,237,0.4)',borderRadius:'2px',textDecoration:'none'}}>Instagram</a>
        </div>
        <div style={{borderTop:'0.5px solid rgba(245,242,237,0.15)',paddingTop:'2rem',width:'100%',maxWidth:'400px'}}>
          <p style={{fontSize:'0.78rem',color:'rgba(245,242,237,0.4)'}}>vanegas@beatsbyvanegas.com</p>
          <p style={{fontSize:'0.72rem',color:'rgba(245,242,237,0.2)',marginTop:'0.5rem'}}>© Beats by Vanegas · All rights reserved</p>
        </div>
      </div>
    </main>
  )
}
import { useNavigate } from 'react-router-dom'
import heroBg from '../assets/hero.jpg'
import beatsImg from '../assets/beatsimg.jpg'

const latestBeats = [
  { name: "Im Certain", index: 0 },
  { name: "Come Over Foreva", index: 1 },
  { name: "Stripped Away", index: 2 },
  { name: "If I Dont", index: 3 },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif"}}>
      <section style={{minHeight:'88vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'6rem 2.5rem 4rem',position:'relative',overflow:'hidden',backgroundImage:`url(${heroBg})`,backgroundSize:'cover',backgroundPosition:'center'}}>
        <div style={{position:'absolute',inset:0,background:'rgba(245,242,237,0.45)'}}></div>
        <div style={{position:'relative',zIndex:1}}>
          <div style={{fontSize:'0.72rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'1.5rem'}}>Producer · R&B · Trap</div>
          <h1 style={{fontSize:'clamp(2.8rem,7vw,5.5rem)',fontWeight:600,lineHeight:1.05,letterSpacing:'-0.02em',marginBottom:'1.4rem',maxWidth:'700px'}}>
            Sound for the<br/><em style={{fontStyle:'italic',color:'#b8933f'}}>next wave.</em>
          </h1>
          <p style={{fontSize:'1rem',color:'rgba(15,15,15,0.55)',lineHeight:1.65,maxWidth:'420px',marginBottom:'2.8rem'}}>R&B and trap beats crafted for artists who move different.</p>
          <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <a href="/beats" style={{padding:'0.85rem 2rem',background:'#0f0f0f',color:'#f5f2ed',fontSize:'0.8rem',letterSpacing:'0.1em',textTransform:'uppercase',borderRadius:'2px',textDecoration:'none',fontWeight:500}}>Browse Beats</a>
            <a href="/contact" style={{padding:'0.85rem 2rem',background:'transparent',color:'#0f0f0f',fontSize:'0.8rem',letterSpacing:'0.1em',textTransform:'uppercase',border:'0.5px solid rgba(15,15,15,0.3)',borderRadius:'2px',textDecoration:'none'}}>Work With Me</a>
          </div>
        </div>
        <div style={{position:'absolute',right:'-2rem',top:'50%',transform:'translateY(-50%)',fontSize:'clamp(8rem,22vw,18rem)',fontWeight:700,color:'rgba(15,15,15,0.04)',letterSpacing:'-0.04em',pointerEvents:'none',userSelect:'none',zIndex:0}}>V</div>
      </section>

      <section style={{padding:'5rem 2.5rem',background:'#edeae4',borderTop:'0.5px solid rgba(15,15,15,0.08)'}}>
        <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Latest</div>
        <h2 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'2.5rem'}}>Latest releases</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'1.5rem'}}>
          {latestBeats.map((b,i) => (
            <div key={i}
              onClick={() => navigate(`/beats?play=${b.index}`)}
              style={{background:'#f5f2ed',borderRadius:'4px',overflow:'hidden',border:'0.5px solid rgba(15,15,15,0.08)',cursor:'pointer',transition:'transform 0.2s'}}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
              <div style={{width:'100%',aspectRatio:'1',backgroundImage:`url(${beatsImg})`,backgroundSize:'cover',backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
                <div style={{position:'absolute',inset:0,background:'rgba(10,10,10,0.3)'}}></div>
                <div style={{position:'relative',zIndex:1,width:'44px',height:'44px',borderRadius:'50%',background:'rgba(245,242,237,0.9)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <span style={{width:0,height:0,borderStyle:'solid',borderWidth:'8px 0 8px 14px',borderColor:'transparent transparent transparent #0f0f0f',marginLeft:'3px',display:'inline-block'}}></span>
                </div>
              </div>
              <div style={{padding:'0.85rem'}}>
                <div style={{fontSize:'0.88rem',fontWeight:500,marginBottom:'0.2rem'}}>{b.name}</div>
                <div style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.45)'}}>Vanegas</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
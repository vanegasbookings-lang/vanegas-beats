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
          <div style={{fontSize:'0.72rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#0f0f0f',marginBottom:'1.2rem',fontWeight:600}}>Producer · Global Sounds · New Beats Every Week</div>
          <h1 style={{fontSize:'clamp(2.8rem,7vw,5.5rem)',fontWeight:600,lineHeight:1.05,letterSpacing:'-0.02em',marginBottom:'1rem',maxWidth:'700px'}}>
            Sound for the<br/><em style={{fontStyle:'italic',color:'#b8933f'}}>next wave.</em>
          </h1>
          <p style={{fontSize:'1.05rem',fontWeight:500,color:'#0f0f0f',marginBottom:'0.5rem',maxWidth:'480px'}}>Premium Multi-Genre Beats · Instant Delivery</p>
          <p style={{fontSize:'0.9rem',color:'rgba(15,15,15,0.55)',lineHeight:1.65,maxWidth:'420px',marginBottom:'2rem'}}>R&B and trap beats crafted for artists who move different.</p>

          <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>
            <a href="/beats" style={{padding:'0.9rem 2.2rem',background:'#0f0f0f',color:'#f5f2ed',fontSize:'0.82rem',letterSpacing:'0.1em',textTransform:'uppercase',borderRadius:'2px',textDecoration:'none',fontWeight:600}}>Get Beats Now</a>
            <a href="/contact" style={{padding:'0.9rem 2rem',background:'transparent',color:'#0f0f0f',fontSize:'0.82rem',letterSpacing:'0.1em',textTransform:'uppercase',border:'0.5px solid rgba(15,15,15,0.3)',borderRadius:'2px',textDecoration:'none'}}>Custom Work</a>
          </div>

          <div style={{display:'flex',gap:'1.5rem',flexWrap:'wrap'}}>
            <div style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.72rem',color:'rgba(15,15,15,0.75)',fontWeight:500}}>
              <span>⚡</span> Instant delivery
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.72rem',color:'rgba(15,15,15,0.75)',fontWeight:500}}>
              <span>🔒</span> Secure checkout
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.72rem',color:'rgba(15,15,15,0.75)',fontWeight:500}}>
              <span>🎵</span> Tagged preview
            </div>
          </div>
        </div>
        <div style={{position:'absolute',right:'-2rem',top:'50%',transform:'translateY(-50%)',fontSize:'clamp(8rem,22vw,18rem)',fontWeight:700,color:'rgba(15,15,15,0.04)',letterSpacing:'-0.04em',pointerEvents:'none',userSelect:'none',zIndex:0}}>V</div>
      </section>

      <section style={{padding:'3rem 2.5rem',background:'#0f0f0f'}}>
        <div style={{display:'flex',justifyContent:'center',gap:'3rem',flexWrap:'wrap'}}>
          {[
            ['⚡','Instant Delivery','Files sent to your email immediately'],
            ['🔒','Secure Checkout','Powered by Gumroad'],
            ['🎵','High Quality','WAV, MP3 & Stems available'],
            ['📄','Clear Licensing','Simple terms, no hidden fees']
          ].map(([icon,title,sub],i) => (
            <div key={i} style={{textAlign:'center',minWidth:'140px'}}>
              <div style={{fontSize:'1.2rem',marginBottom:'0.4rem'}}>{icon}</div>
              <div style={{fontSize:'0.78rem',fontWeight:600,color:'#f5f2ed',marginBottom:'0.2rem'}}>{title}</div>
              <div style={{fontSize:'0.68rem',color:'rgba(245,242,237,0.4)'}}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'4rem 2.5rem',background:'#edeae4',borderTop:'0.5px solid rgba(15,15,15,0.08)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'2rem',flexWrap:'wrap',gap:'1rem'}}>
          <div>
            <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.4rem'}}>Featured</div>
            <h2 style={{fontSize:'clamp(1.4rem,2.5vw,1.8rem)',fontWeight:600,letterSpacing:'-0.015em'}}>Beat of the week</h2>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'0.5rem',padding:'0.5rem 1rem',background:'rgba(184,147,63,0.1)',border:'0.5px solid rgba(184,147,63,0.3)',borderRadius:'2px'}}>
            <span style={{fontSize:'0.68rem',color:'#b8933f',letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:600}}>⏳ Limited licenses available</span>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',alignItems:'center',background:'#f5f2ed',borderRadius:'4px',padding:'2rem',border:'0.5px solid rgba(15,15,15,0.08)'}}>
          <div>
            <div style={{display:'inline-block',fontSize:'0.65rem',letterSpacing:'0.14em',textTransform:'uppercase',padding:'0.3rem 0.75rem',background:'#b8933f',color:'#fff',borderRadius:'1px',marginBottom:'1rem',fontWeight:500}}>Most Popular</div>
            <h3 style={{fontSize:'1.6rem',fontWeight:600,marginBottom:'0.4rem'}}>Im Certain</h3>
            <div style={{display:'flex',gap:'0.75rem',marginBottom:'1rem',flexWrap:'wrap'}}>
              <span style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.5)'}}>80 BPM</span>
              <span style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.5)'}}>·</span>
              <span style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.5)'}}>D# Minor</span>
              <span style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.5)'}}>·</span>
              <span style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.5)'}}>R&B</span>
            </div>
            <p style={{fontSize:'0.85rem',color:'rgba(15,15,15,0.55)',lineHeight:1.65,marginBottom:'1.5rem'}}>A dark, atmospheric R&B record built for late-night sessions. Room for your voice to breathe.</p>
            <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap'}}>
              <a href="https://vanegasbooking.gumroad.com/l/mxnbth" data-gumroad-single-product="true" style={{padding:'0.75rem 1.75rem',background:'#0f0f0f',color:'#f5f2ed',fontSize:'0.78rem',letterSpacing:'0.1em',textTransform:'uppercase',borderRadius:'2px',textDecoration:'none',fontWeight:600}}>Buy Now — $20</a>
              <button onClick={() => navigate('/beats?play=0')} style={{padding:'0.75rem 1.5rem',background:'transparent',color:'#0f0f0f',fontSize:'0.78rem',letterSpacing:'0.1em',textTransform:'uppercase',border:'0.5px solid rgba(15,15,15,0.25)',borderRadius:'2px',cursor:'pointer'}}>Preview</button>
            </div>
          </div>
          <div style={{borderRadius:'4px',aspectRatio:'1',backgroundImage:`url(${beatsImg})`,backgroundSize:'cover',backgroundPosition:'center',position:'relative'}}>
            <div style={{position:'absolute',inset:0,background:'rgba(10,10,10,0.3)',borderRadius:'4px'}}></div>
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:1}}>
              <div style={{fontFamily:"'Acids',sans-serif",fontSize:'5rem',color:'rgba(255,255,255,0.15)'}}>V</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'4rem 2.5rem',background:'#edeae4',borderTop:'0.5px solid rgba(15,15,15,0.08)'}}>
        <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Catalog</div>
        <h2 style={{fontSize:'clamp(1.4rem,2.5vw,1.8rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'2rem'}}>Latest releases</h2>
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
                <div style={{fontSize:'0.72rem',color:'rgba(15,15,15,0.45)'}}>Vanegas · Tap to preview</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <a href="/beats" style={{fontSize:'0.78rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'#b8933f',textDecoration:'none',borderBottom:'0.5px solid #b8933f',paddingBottom:'2px'}}>View all 9 beats →</a>
        </div>
      </section>

    </main>
  )
}
import textureBg from '../assets/texture.jpg'

export default function Licensing() {
  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif",padding:'6rem 2.5rem'}}>
      <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Transparent pricing</div>
      <h1 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'0.5rem'}}>Licensing</h1>
      <p style={{fontSize:'0.9rem',color:'rgba(15,15,15,0.5)',marginBottom:'3rem'}}>Simple, transparent licensing for every level.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'1px',border:'0.5px solid rgba(15,15,15,0.1)'}}>
        {[
          {tier:'Basic',name:'MP3 Lease',price:'$20',desc:'Standard quality for demos and preliminary use.',features:['MP3 file (320kbps)','Up to 2,500 streams','Non-commercial use','Must credit Vanegas']},
          {tier:'Standard',name:'WAV Lease',price:'$40',desc:'High-quality file for professional recordings.',features:['WAV file (24-bit)','Up to 10,000 streams','Commercial use','Must credit Vanegas']},
          {tier:'Premium',name:'WAV + Stems',price:'$60',desc:'Full creative control for mixing and flexibility.',features:['WAV + individual stems','Up to 50,000 streams','Full commercial use','Tracked out files']},
          {tier:'Exclusive',name:'Exclusive License',price:'Contact',desc:'Full ownership. Custom agreement.',features:['Full ownership rights','Unlimited streams','Beat removed from store','Custom contract']},
        ].map((l,i) => (
          <div key={i} style={{padding:'1.75rem 1.5rem',borderLeft: i > 0 ? '0.5px solid rgba(255,255,255,0.1)' : 'none',backgroundImage:`url(${textureBg})`,backgroundSize:'cover',backgroundPosition:'center',position:'relative'}}>
            <div style={{position:'absolute',inset:0,background: i === 3 ? 'rgba(10,10,10,0.55)' : 'rgba(10,10,10,0.45)'}}></div>
            <div style={{position:'relative',zIndex:1}}>
              <div style={{fontSize:'0.7rem',letterSpacing:'0.14em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>{l.tier}</div>
              <div style={{fontSize:'1.05rem',fontWeight:600,marginBottom:'0.75rem',color:'#ffffff'}}>{l.name}</div>
              <div style={{fontSize:'1.6rem',fontWeight:600,marginBottom:'1rem',letterSpacing:'-0.02em',color: i === 3 ? '#b8933f' : '#ffffff'}}>{l.price}</div>
              <p style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.65)',lineHeight:1.65,marginBottom:'1rem'}}>{l.desc}</p>
              <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                {l.features.map((f,j) => (
                  <li key={j} style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.7)',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                    <span style={{width:'8px',height:'8px',borderRadius:'50%',border:'0.5px solid #b8933f',flexShrink:0,display:'inline-block'}}></span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
import textureBg from '../assets/texture.jpg'

export default function Licensing() {
  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif",padding:'6rem 2.5rem'}}>
      <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Transparent pricing</div>
      <h1 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'0.5rem'}}>Licensing</h1>
      <p style={{fontSize:'0.9rem',color:'rgba(15,15,15,0.5)',marginBottom:'3rem'}}>Simple, transparent licensing for every level. Instant delivery on all tiers.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'1px',border:'0.5px solid rgba(15,15,15,0.1)'}}>
        {[
          {
            tier:'Basic',
            name:'MP3 Lease',
            price:'$20',
            badge:null,
            desc:'Perfect for demos, freestyles and getting started.',
            cta:'Start here',
            features:['MP3 file (320kbps)','Up to 2,500 streams','Non-commercial use','Must credit Vanegas','⚡ Instant delivery']
          },
          {
            tier:'Standard',
            name:'WAV Lease',
            price:'$40',
            badge:'Most Popular',
            desc:'Studio-ready quality for professional recordings and releases.',
            cta:'Best value',
            features:['WAV file (24-bit)','Up to 10,000 streams','Commercial use','Must credit Vanegas','⚡ Instant delivery']
          },
          {
            tier:'Premium',
            name:'WAV + Stems',
            price:'$80',
            badge:null,
            desc:'Full creative control. Mix and master exactly how you want it.',
            cta:'Full control',
            features:['WAV + individual stems','Up to 50,000 streams','Full commercial use','Tracked out files','⚡ Instant delivery']
          },
          {
            tier:'Exclusive',
            name:'Exclusive License',
            price:'Contact',
            badge:'Full Ownership',
            desc:'Own it completely. Beat removed from store. Custom contract.',
            cta:'Let\'s talk',
            features:['Full ownership rights','Unlimited streams','Beat removed from store','Custom contract','Direct negotiation']
          },
        ].map((l,i) => (
          <div key={i} style={{padding:'1.75rem 1.5rem',borderLeft: i > 0 ? '0.5px solid rgba(255,255,255,0.1)' : 'none',backgroundImage:`url(${textureBg})`,backgroundSize:'cover',backgroundPosition:'center',position:'relative'}}>
            <div style={{position:'absolute',inset:0,background: i === 1 ? 'rgba(10,10,10,0.5)' : i === 3 ? 'rgba(10,10,10,0.58)' : 'rgba(10,10,10,0.55)'}}></div>
            {i === 1 && <div style={{position:'absolute',top:0,left:0,right:0,height:'3px',background:'#b8933f'}}></div>}
            <div style={{position:'relative',zIndex:1}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.75rem'}}>
                <div style={{fontSize:'0.7rem',letterSpacing:'0.14em',textTransform:'uppercase',color:'#b8933f'}}>{l.tier}</div>
                {l.badge && <div style={{fontSize:'0.6rem',letterSpacing:'0.1em',textTransform:'uppercase',padding:'0.2rem 0.6rem',background: i === 1 ? '#b8933f' : 'rgba(184,147,63,0.2)',color: i === 1 ? '#fff' : '#b8933f',borderRadius:'1px',fontWeight:600}}>{l.badge}</div>}
              </div>
              <div style={{fontSize:'1.05rem',fontWeight:600,marginBottom:'0.5rem',color:'#ffffff'}}>{l.name}</div>
              <div style={{fontSize:'1.8rem',fontWeight:600,marginBottom:'0.75rem',letterSpacing:'-0.02em',color: i === 3 ? '#b8933f' : '#ffffff'}}>{l.price}</div>
              <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.6)',lineHeight:1.65,marginBottom:'1.25rem'}}>{l.desc}</p>
              <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'0.5rem',marginBottom:'1.5rem'}}>
                {l.features.map((f,j) => (
                  <li key={j} style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.7)',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                    <span style={{width:'8px',height:'8px',borderRadius:'50%',border:'0.5px solid #b8933f',flexShrink:0,display:'inline-block'}}></span>{f}
                  </li>
                ))}
              </ul>
              <a href="/beats" style={{display:'block',textAlign:'center',padding:'0.6rem',background: i === 1 ? '#b8933f' : 'transparent',color: i === 1 ? '#fff' : 'rgba(255,255,255,0.7)',border:`0.5px solid ${i === 1 ? '#b8933f' : 'rgba(255,255,255,0.2)'}`,borderRadius:'2px',fontSize:'0.7rem',letterSpacing:'0.1em',textTransform:'uppercase',textDecoration:'none',fontWeight: i === 1 ? 600 : 400}}>
                {i === 3 ? <span onClick={() => window.location.href='/contact'}>Get in touch →</span> : l.cta + ' →'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:'2.5rem',padding:'1.5rem',background:'#edeae4',borderRadius:'4px',border:'0.5px solid rgba(15,15,15,0.08)',display:'flex',justifyContent:'center',gap:'3rem',flexWrap:'wrap',textAlign:'center'}}>
        <div>
          <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:'0.2rem'}}>⚡ Instant Delivery</div>
          <div style={{fontSize:'0.68rem',color:'rgba(15,15,15,0.5)'}}>All files sent immediately after purchase</div>
        </div>
        <div>
          <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:'0.2rem'}}>🔒 Secure Checkout</div>
          <div style={{fontSize:'0.68rem',color:'rgba(15,15,15,0.5)'}}>Powered by Gumroad</div>
        </div>
        <div>
          <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:'0.2rem'}}>💬 Questions?</div>
          <div style={{fontSize:'0.68rem',color:'rgba(15,15,15,0.5)'}}>vanegasbookings@gmail.com</div>
        </div>
      </div>

    </main>
  )
}
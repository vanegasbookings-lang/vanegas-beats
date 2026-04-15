export default function About() {
  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif"}}>
      <section style={{padding:'6rem 2.5rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',alignItems:'center',maxWidth:'1100px'}}>
        
        <div style={{position:'relative'}}>
          <div style={{width:'100%',aspectRatio:'3/4',background:'#ddd8d0',borderRadius:'4px',overflow:'hidden',border:'0.5px solid rgba(15,15,15,0.08)'}}>
            <img 
              src="/src/assets/pp.jpeg" 
              alt="Vanegas" 
              style={{width:'100%',height:'100%',objectFit:'cover'}}
              onError={e => { e.target.style.display='none' }}
            />
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'0.5rem'}}>
              <div style={{fontFamily:"'Acids',sans-serif",fontSize:'4rem',color:'rgba(15,15,15,0.12)'}}>V</div>
              
            </div>
          </div>
          <div style={{position:'absolute',bottom:'-1rem',right:'-1rem',width:'60%',height:'60%',border:'2px solid #b8933f',borderRadius:'4px',zIndex:-1}}></div>
        </div>

        <div>
          <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>The producer</div>
          <h1 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'2rem'}}>About</h1>
          <p style={{fontSize:'1.05rem',lineHeight:1.8,color:'rgba(15,15,15,0.7)',marginBottom:'1.5rem'}}>Vanegas is a producer focused on crafting emotionally driven, modern records that sit between R&B and trap. His sound blends minimalism with atmosphere, designed for artists looking to stand out and create something timeless.</p>
          <p style={{fontSize:'1.05rem',lineHeight:1.8,color:'rgba(15,15,15,0.7)',marginBottom:'2.5rem'}}>Every beat is built with intention — leaving space for the artist while still carrying a distinct identity.</p>
          <div style={{display:'flex',gap:'2rem'}}>
            <div>
              <div style={{fontSize:'2rem',fontWeight:600,color:'#b8933f'}}>50+</div>
              <div style={{fontSize:'0.72rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(15,15,15,0.45)'}}>Beats produced</div>
            </div>
            <div>
              <div style={{fontSize:'2rem',fontWeight:600,color:'#b8933f'}}>3+</div>
              <div style={{fontSize:'0.72rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(15,15,15,0.45)'}}>Years active</div>
            </div>
            <div>
              <div style={{fontSize:'2rem',fontWeight:600,color:'#b8933f'}}>100%</div>
              <div style={{fontSize:'0.72rem',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(15,15,15,0.45)'}}>Original</div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
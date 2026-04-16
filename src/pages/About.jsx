import ppImage from '../assets/pp.jpeg'

export default function About() {
  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif"}}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          max-width: 1100px;
          padding: 6rem 2.5rem;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 4rem 1.5rem !important;
          }
          .about-image-wrap {
            width: 100% !important;
            max-width: 340px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>

      <div className="about-grid">
        <div className="about-image-wrap" style={{position:'relative'}}>
          <div style={{width:'100%',aspectRatio:'3/4',background:'#ddd8d0',borderRadius:'4px',overflow:'hidden',border:'0.5px solid rgba(15,15,15,0.08)'}}>
            <img
              src={ppImage}
              alt="Vanegas"
              style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
            />
          </div>
          <div style={{position:'absolute',bottom:'-1rem',right:'-1rem',width:'60%',height:'60%',border:'2px solid #b8933f',borderRadius:'4px',zIndex:-1}}></div>
        </div>

        <div>
          <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>The producer</div>
          <h1 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'2rem'}}>About</h1>
          <p style={{fontSize:'1.05rem',lineHeight:1.8,color:'rgba(15,15,15,0.7)',marginBottom:'1.5rem'}}>Vanegas is a producer focused on crafting emotionally driven, modern records that sit between R&B and trap. His sound blends minimalism with atmosphere, designed for artists looking to stand out and create something timeless.</p>
          <p style={{fontSize:'1.05rem',lineHeight:1.8,color:'rgba(15,15,15,0.7)',marginBottom:'2rem'}}>Every beat is built with intention — leaving space for the artist while still carrying a distinct identity.</p>

          <div style={{display:'flex',gap:'2rem',marginBottom:'2.5rem',flexWrap:'wrap'}}>
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

          <div style={{fontSize:'0.7rem',letterSpacing:'0.14em',textTransform:'uppercase',color:'rgba(15,15,15,0.4)',marginBottom:'1rem'}}>Find me on</div>
          <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap'}}>
            <a href="https://instagram.com/vanegas.808" target="_blank" style={{display:'flex',alignItems:'center',gap:'0.5rem',padding:'0.55rem 1.1rem',background:'#0f0f0f',color:'#f5f2ed',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em'}}>
              Instagram
            </a>
            <a href="https://tiktok.com/@vanegas_ofc" target="_blank" style={{display:'flex',alignItems:'center',gap:'0.5rem',padding:'0.55rem 1.1rem',background:'#0f0f0f',color:'#f5f2ed',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em'}}>
              TikTok
            </a>
            <a href="https://open.spotify.com/intl-es/artist/2RpdkM7b5jUJHB9XQcxYgD" target="_blank" style={{display:'flex',alignItems:'center',gap:'0.5rem',padding:'0.55rem 1.1rem',background:'#1DB954',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em'}}>
              Spotify
            </a>
            <a href="https://soundcloud.com/vanegas-617664564" target="_blank" style={{display:'flex',alignItems:'center',gap:'0.5rem',padding:'0.55rem 1.1rem',background:'#ff5500',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em'}}>
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
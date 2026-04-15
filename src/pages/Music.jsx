import cover1 from '../assets/cover1.png'
import cover2 from '../assets/cover2.png'
import cover3 from '../assets/cover3.png'
import cover4 from '../assets/cover4.png'
import cover5 from '../assets/cover5.png'
import cover6 from '../assets/cover6.png'
import cover7 from '../assets/cover7.png'
import cover8 from '../assets/cover8.png'
import cover9 from '../assets/cover9.png'
import cover10 from '../assets/cover10.png'

const releases = [
  { title: "Daughter of the Sun", subtitle: "Vbnd, Kattie Tuper, Justice Der (VANEGASxERI Edit)", date: "Mar 2026", url: "https://soundcloud.com/vanegas-617664564/daughter-of-the-sun-vbnd", cover: cover1 },
  { title: "In the Chair", subtitle: "Odeal (Vanegas Edit)", date: "Nov 2025", url: "https://soundcloud.com/vanegas-617664564/in-the-chair-odeal-vanegas", cover: cover2 },
  { title: "WuWu", subtitle: "Sen Senra, Feid (VANEGAS x JEY Edit)", date: "Sep 2025", url: "https://soundcloud.com/vanegas-617664564/wuwu-sen-senra-feid-vanegas-x", cover: cover3 },
  { title: "No Digas Nada", subtitle: "Latin Mafia (VANEGAS x ERI Edit)", date: "Jul 2025", url: "https://soundcloud.com/vanegas-617664564/no-digas-nada-latin-mafia-vanegas-x-eri-edit-1", cover: cover4 },
  { title: "Julieta", subtitle: "Latin Mafia (VANEGAS Edit)", date: "Aug 2025", url: "https://soundcloud.com/vanegas-617664564/julieta-latin-mafia-vanegas", cover: cover5 },
  { title: "Se Preparo", subtitle: "Ozuna (VANEGAS Edit)", date: "May 2025", url: "https://soundcloud.com/vanegas-617664564/a0da3f72-1b78-4b93-a71a-ab0257df9aad", cover: cover6 },
  { title: "Lucid Dreams", subtitle: "Juice WRLD (VANEGAS Edit)", date: "May 2025", url: "https://soundcloud.com/vanegas-617664564/lucid-dreams-juice-wrld", cover: cover7 },
  { title: "Mutt", subtitle: "Leon Thomas (VANEGAS Edit)", date: "Apr 2025", url: "https://soundcloud.com/vanegas-617664564/a93c155a-d6ad-4b5e-b2e7-c00e8bc1d465", cover: cover8 },
  { title: "White Iverson", subtitle: "VANEGAS x UPSIDOWN x ERI Edit", date: "2025", url: "https://soundcloud.com/vanegas-617664564", cover: cover9 },
  { title: "Goyo", subtitle: "Deeikel (VANEGAS Edit)", date: "2025", url: "https://soundcloud.com/vanegas-617664564", cover: cover10 },
]

export default function Music() {
  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif",padding:'6rem 2.5rem'}}>
      <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Discography</div>
      <h1 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em',marginBottom:'0.5rem'}}>Music</h1>
      <p style={{fontSize:'0.9rem',color:'rgba(15,15,15,0.5)',marginBottom:'1.5rem'}}>All releases and edits by Vanegas.</p>

      <div style={{display:'flex',gap:'1rem',marginBottom:'3rem',flexWrap:'wrap'}}>
        <a href="https://open.spotify.com/intl-es/artist/2RpdkM7b5jUJHB9XQcxYgD" target="_blank" style={{padding:'0.55rem 1.2rem',background:'#1DB954',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.78rem',fontWeight:500,letterSpacing:'0.06em'}}>Spotify</a>
        <a href="https://soundcloud.com/vanegas-617664564" target="_blank" style={{padding:'0.55rem 1.2rem',background:'#ff5500',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.78rem',fontWeight:500,letterSpacing:'0.06em'}}>SoundCloud</a>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
        {releases.map((r,i) => (
          <div key={i} style={{background:'#edeae4',borderRadius:'4px',overflow:'hidden',border:'0.5px solid rgba(15,15,15,0.08)'}}>
            <div style={{display:'grid',gridTemplateColumns:'100px 1fr',gap:'0'}}>
              <img src={r.cover} alt={r.title} style={{width:'100px',height:'100px',objectFit:'cover',display:'block'}}/>
              <div style={{padding:'1rem 1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.75rem'}}>
                  <div>
                    <div style={{fontSize:'0.92rem',fontWeight:600,color:'#0f0f0f',marginBottom:'0.2rem'}}>{r.title}</div>
                    <div style={{fontSize:'0.75rem',color:'rgba(15,15,15,0.5)'}}>{r.subtitle}</div>
                  </div>
                  <div style={{fontSize:'0.68rem',color:'#b8933f',letterSpacing:'0.08em',textTransform:'uppercase',flexShrink:0,marginLeft:'1rem'}}>{r.date}</div>
                </div>
                <iframe
                  width="100%"
                  height="60"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(r.url)}&color=%23b8933f&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
                  style={{borderRadius:'2px'}}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:'4rem',padding:'2rem',background:'#edeae4',borderRadius:'4px',border:'0.5px solid rgba(15,15,15,0.08)',textAlign:'center'}}>
        <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem'}}>Stream everywhere</div>
        <h2 style={{fontSize:'1.4rem',fontWeight:600,marginBottom:'0.5rem'}}>Find Vanegas on all platforms</h2>
        <p style={{fontSize:'0.85rem',color:'rgba(15,15,15,0.5)',marginBottom:'1.5rem'}}>Follow to stay updated on new releases.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
          <a href="https://open.spotify.com/intl-es/artist/2RpdkM7b5jUJHB9XQcxYgD" target="_blank" style={{padding:'0.7rem 1.5rem',background:'#1DB954',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.78rem',fontWeight:500}}>Spotify</a>
          <a href="https://soundcloud.com/vanegas-617664564" target="_blank" style={{padding:'0.7rem 1.5rem',background:'#ff5500',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.78rem',fontWeight:500}}>SoundCloud</a>
        </div>
      </div>
    </main>
  )
}
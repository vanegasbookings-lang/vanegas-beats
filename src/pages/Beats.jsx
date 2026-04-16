import { useState, useEffect, useRef } from 'react'
import moodyBg from '../assets/moodylights.jpg'
import beat1 from '../assets/beat1.mp3'
import beat2 from '../assets/beat2.mp3'
import beat3 from '../assets/beat3.mp3'
import beat4 from '../assets/beat4.mp3'
import beat5 from '../assets/beat5.mp3'
import beat6 from '../assets/beat6.mp3'
import beat7 from '../assets/beat7.mp3'
import beat8 from '../assets/beat8.mp3'
import beat9 from '../assets/beat9.wav'

const beats = [
  { name: "Im Certain", bpm: "80", key: "D# Minor", genre: "R&B", url: "https://vanegasbooking.gumroad.com/l/mxnbth", audio: beat1 },
  { name: "Come Over Foreva", bpm: "95", key: "E Minor", genre: "R&B", url: "https://vanegasbooking.gumroad.com/l/kqreqh", audio: beat2 },
  { name: "Stripped Away", bpm: "120", key: "Eb Minor", genre: "Trap", url: "https://vanegasbooking.gumroad.com/l/coawc", audio: beat3 },
  { name: "If I Dont", bpm: "101", key: "G# Minor", genre: "Trap", url: "https://vanegasbooking.gumroad.com/l/zbdebn", audio: beat4 },
  { name: "For the Soul", bpm: "126", key: "C Minor", genre: "R&B", url: "https://vanegasbooking.gumroad.com/l/zoqfs", audio: beat5 },
  { name: "Bad Boy Ting", bpm: "91", key: "G Minor", genre: "Trap", url: "https://vanegasbooking.gumroad.com/l/ddirl", audio: beat6 },
  { name: "Drillinn", bpm: "142", key: "D# Minor", genre: "Trap", url: "https://vanegasbooking.gumroad.com/l/afwnoe", audio: beat7 },
  { name: "We Going West", bpm: "96", key: "D# Minor", genre: "R&B Trap", url: "https://vanegasbooking.gumroad.com/l/tuinhk", audio: beat8 },
  { name: "Wonky Future", bpm: "101", key: "D# Minor", genre: "Trap", url: "https://vanegasbooking.gumroad.com/l/sulhup", audio: beat9 },
]

export default function Beats() {
  const [hovered, setHovered] = useState(null)
  const [playing, setPlaying] = useState(null)
  const [progress, setProgress] = useState({})
  const audioRefs = useRef({})

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://gumroad.com/js/gumroad.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const autoPlay = params.get('play')
    if (autoPlay !== null) {
      const idx = parseInt(autoPlay)
      setTimeout(() => {
        if (audioRefs.current[idx]) {
          audioRefs.current[idx].play()
          setPlaying(idx)
        }
      }, 800)
    }
  }, [])

  const togglePlay = (i) => {
    if (playing === i) {
      audioRefs.current[i].pause()
      setPlaying(null)
    } else {
      if (playing !== null && audioRefs.current[playing]) {
        audioRefs.current[playing].pause()
      }
      audioRefs.current[i].play()
      setPlaying(i)
    }
  }

  const handleTimeUpdate = (i) => {
    const audio = audioRefs.current[i]
    if (audio) {
      setProgress(p => ({...p, [i]: (audio.currentTime / audio.duration) * 100 || 0}))
    }
  }

  const handleSeek = (i, e) => {
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    audioRefs.current[i].currentTime = pct * audioRefs.current[i].duration
  }

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '0:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <main style={{background:'#f5f2ed',minHeight:'100vh',color:'#0f0f0f',fontFamily:"'Space Grotesk', sans-serif",padding:'6rem 2.5rem'}}>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'1rem',flexWrap:'wrap',gap:'1rem'}}>
        <div>
          <div style={{fontSize:'0.7rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.5rem'}}>Catalog</div>
          <h1 style={{fontSize:'clamp(1.6rem,3vw,2.2rem)',fontWeight:600,letterSpacing:'-0.015em'}}>Browse beats</h1>
        </div>
        <div style={{display:'flex',gap:'1.5rem',flexWrap:'wrap'}}>
          <div style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.72rem',color:'rgba(15,15,15,0.6)',fontWeight:500}}>
            <span>⚡</span> Instant delivery
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.72rem',color:'rgba(15,15,15,0.6)',fontWeight:500}}>
            <span>🔒</span> Secure checkout
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.72rem',color:'rgba(15,15,15,0.6)',fontWeight:500}}>
            <span>🔄</span> Always in motion
          </div>
        </div>
      </div>

      <div style={{padding:'0.75rem 1rem',background:'rgba(184,147,63,0.08)',border:'0.5px solid rgba(184,147,63,0.25)',borderRadius:'2px',marginBottom:'2.5rem',display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <span style={{fontSize:'0.72rem',color:'#b8933f',fontWeight:600}}>🎧 Press play on any beat to preview before you buy. Full tagged versions available.</span>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))',gap:'1px',border:'0.5px solid rgba(15,15,15,0.1)'}}>
        {beats.map((b,i) => {
          const isHovered = hovered === i
          const isPlaying = playing === i
          return (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{padding:'1.5rem',borderRight:'0.5px solid rgba(15,15,15,0.08)',transition:'all 0.3s ease',position:'relative',backgroundImage: isHovered ? 'none' : `url(${moodyBg})`,backgroundColor: isHovered ? '#edeae4' : 'transparent',backgroundSize:'cover',backgroundPosition:'center'}}>
              {!isHovered && <div style={{position:'absolute',inset:0,background:'rgba(10,10,10,0.55)'}}></div>}
              <audio
                ref={el => audioRefs.current[i] = el}
                src={b.audio}
                onTimeUpdate={() => handleTimeUpdate(i)}
                onEnded={() => setPlaying(null)}
              />
              <div style={{position:'relative',zIndex:1}}>
                <div style={{fontSize:'1rem',fontWeight:600,marginBottom:'0.5rem',color: isHovered ? '#0f0f0f' : '#ffffff'}}>{b.name}</div>
                <div style={{display:'flex',gap:'0.5rem',marginBottom:'1rem',flexWrap:'wrap'}}>
                  {[b.genre, b.bpm+' BPM', b.key].map((t,j) => (
                    <span key={j} style={{fontSize:'0.62rem',letterSpacing:'0.08em',padding:'0.25rem 0.6rem',border:`0.5px solid ${isHovered ? 'rgba(15,15,15,0.15)' : 'rgba(255,255,255,0.25)'}`,borderRadius:'1px',color: isHovered ? 'rgba(15,15,15,0.5)' : 'rgba(255,255,255,0.6)',textTransform:'uppercase'}}>{t}</span>
                  ))}
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'1rem'}}>
                  <button onClick={() => togglePlay(i)} style={{width:'36px',height:'36px',borderRadius:'50%',background: isHovered ? '#0f0f0f' : '#b8933f',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transition:'all 0.2s'}}>
                    {isPlaying
                      ? <span style={{width:'10px',height:'12px',borderLeft:`3px solid ${isHovered ? '#f5f2ed' : '#0f0f0f'}`,borderRight:`3px solid ${isHovered ? '#f5f2ed' : '#0f0f0f'}`,display:'inline-block'}}></span>
                      : <span style={{width:0,height:0,borderStyle:'solid',borderWidth:'6px 0 6px 10px',borderColor:`transparent transparent transparent ${isHovered ? '#f5f2ed' : '#0f0f0f'}`,marginLeft:'2px',display:'inline-block'}}></span>
                    }
                  </button>
                  <div style={{flex:1}}>
                    <div onClick={(e) => handleSeek(i, e)} style={{height:'3px',background: isHovered ? 'rgba(15,15,15,0.15)' : 'rgba(255,255,255,0.2)',borderRadius:'2px',cursor:'pointer',marginBottom:'4px',position:'relative'}}>
                      <div style={{height:'100%',width:`${progress[i] || 0}%`,background:'#b8933f',borderRadius:'2px',transition:'width 0.1s'}}></div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.62rem',color: isHovered ? 'rgba(15,15,15,0.4)' : 'rgba(255,255,255,0.4)'}}>
                      <span>{formatTime(audioRefs.current[i]?.currentTime)}</span>
                      <span>{formatTime(audioRefs.current[i]?.duration)}</span>
                    </div>
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.4rem',marginBottom:'0.75rem'}}>
                  {[['MP3','$20'],['WAV','$40'],['Stems','$80']].map(([label,price],j) => (
                    <div key={j} style={{padding:'0.45rem 0.3rem',border:`0.5px solid ${isHovered ? 'rgba(15,15,15,0.12)' : 'rgba(255,255,255,0.2)'}`,borderRadius:'2px',textAlign:'center'}}>
                      <span style={{fontSize:'0.58rem',color: isHovered ? 'rgba(15,15,15,0.45)' : 'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.06em',display:'block',marginBottom:'0.2rem'}}>{label}</span>
                      <span style={{fontSize:'0.75rem',fontWeight:600,color: isHovered ? '#0f0f0f' : '#ffffff'}}>{price}</span>
                    </div>
                  ))}
                </div>
                <a href={b.url} data-gumroad-single-product="true" style={{display:'block',width:'100%',padding:'0.65rem',background: isHovered ? '#0f0f0f' : '#b8933f',color:'#f5f2ed',borderRadius:'2px',fontSize:'0.72rem',letterSpacing:'0.1em',textTransform:'uppercase',cursor:'pointer',fontWeight:600,transition:'background 0.3s',textAlign:'center',textDecoration:'none'}}>
                  Get This Beat ⚡
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{marginTop:'3rem',padding:'1.5rem',background:'#edeae4',borderRadius:'4px',border:'0.5px solid rgba(15,15,15,0.08)',display:'flex',justifyContent:'center',gap:'3rem',flexWrap:'wrap',textAlign:'center'}}>
        <div>
          <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:'0.2rem'}}>⚡ Instant Delivery</div>
          <div style={{fontSize:'0.68rem',color:'rgba(15,15,15,0.5)'}}>Files sent to your email immediately</div>
        </div>
        <div>
          <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:'0.2rem'}}>🔒 Secure Checkout</div>
          <div style={{fontSize:'0.68rem',color:'rgba(15,15,15,0.5)'}}>Powered by Gumroad</div>
        </div>
        <div>
          <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:'0.2rem'}}>📄 Clear Licensing</div>
          <div style={{fontSize:'0.68rem',color:'rgba(15,15,15,0.5)'}}>Simple terms, no hidden fees</div>
        </div>
      </div>

      <div style={{marginTop:'2rem',padding:'1.5rem',background:'#0f0f0f',borderRadius:'4px',display:'flex',justifyContent:'center',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
        <span style={{fontSize:'0.72rem',color:'rgba(245,242,237,0.4)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Follow</span>
        <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap',justifyContent:'center'}}>
          <a href="https://instagram.com/vanegas.808" target="_blank" style={{padding:'0.5rem 1.1rem',background:'rgba(245,242,237,0.08)',color:'#f5f2ed',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em',border:'0.5px solid rgba(245,242,237,0.1)'}}>Instagram</a>
          <a href="https://tiktok.com/@vanegas_ofc" target="_blank" style={{padding:'0.5rem 1.1rem',background:'rgba(245,242,237,0.08)',color:'#f5f2ed',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em',border:'0.5px solid rgba(245,242,237,0.1)'}}>TikTok</a>
          <a href="https://open.spotify.com/intl-es/artist/2RpdkM7b5jUJHB9XQcxYgD" target="_blank" style={{padding:'0.5rem 1.1rem',background:'#1DB954',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em'}}>Spotify</a>
          <a href="https://soundcloud.com/vanegas-617664564" target="_blank" style={{padding:'0.5rem 1.1rem',background:'#ff5500',color:'#fff',borderRadius:'2px',textDecoration:'none',fontSize:'0.75rem',fontWeight:500,letterSpacing:'0.06em'}}>SoundCloud</a>
        </div>
      </div>

    </main>
  )
}
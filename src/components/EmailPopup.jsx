import { useState, useEffect } from 'react'

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY
const LIST_ID = 3

export default function EmailPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const dismissed = localStorage.getItem('popup_dismissed')
    const subscribed = localStorage.getItem('popup_subscribed')
    if (!dismissed && !subscribed) {
      const timer = setTimeout(() => setVisible(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('popup_dismissed', 'true')
    setVisible(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify({
          email: email,
          listIds: [LIST_ID],
          updateEnabled: true
        })
      })

      if (response.ok || response.status === 204) {
        localStorage.setItem('popup_subscribed', 'true')
        setSubmitted(true)
      } else {
        const data = await response.json()
        if (data.code === 'duplicate_parameter') {
          localStorage.setItem('popup_subscribed', 'true')
          setSubmitted(true)
        } else {
          setError('Something went wrong. Please try again.')
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  if (!visible) return null

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(15,15,15,0.7)',zIndex:999,display:'flex',alignItems:'center',justifyContent:'center',padding:'1.5rem'}}>
      <div style={{background:'#f5f2ed',borderRadius:'4px',maxWidth:'440px',width:'100%',position:'relative',overflow:'hidden'}}>
        <div style={{height:'3px',background:'#b8933f',width:'100%'}}></div>
        <button onClick={handleDismiss} style={{position:'absolute',top:'1rem',right:'1rem',background:'none',border:'none',cursor:'pointer',fontSize:'1rem',color:'rgba(15,15,15,0.4)',lineHeight:1}}>✕</button>

        {!submitted ? (
          <div style={{padding:'2.5rem'}}>
            <div style={{fontSize:'0.68rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#b8933f',marginBottom:'0.75rem',fontWeight:600}}>Exclusive offer</div>
            <h2 style={{fontFamily:"'Space Grotesk', sans-serif",fontSize:'1.6rem',fontWeight:600,letterSpacing:'-0.02em',marginBottom:'0.5rem',lineHeight:1.2}}>Get 10% off your<br/>first beat.</h2>
            <p style={{fontSize:'0.85rem',color:'rgba(15,15,15,0.55)',lineHeight:1.65,marginBottom:'1.75rem'}}>Subscribe and get an exclusive discount code sent straight to your inbox. Valid for 7 days.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{width:'100%',padding:'0.85rem 1rem',background:'#edeae4',border:'0.5px solid rgba(15,15,15,0.12)',borderRadius:'2px',fontSize:'0.88rem',fontFamily:"'Space Grotesk', sans-serif",color:'#0f0f0f',outline:'none',marginBottom:'0.75rem',boxSizing:'border-box'}}
              />
              {error && <p style={{fontSize:'0.72rem',color:'#c0392b',marginBottom:'0.75rem'}}>{error}</p>}
              <button type="submit" disabled={loading} style={{width:'100%',padding:'0.9rem',background:'#0f0f0f',color:'#f5f2ed',border:'none',borderRadius:'2px',fontSize:'0.8rem',letterSpacing:'0.1em',textTransform:'uppercase',cursor:'pointer',fontWeight:600,fontFamily:"'Space Grotesk', sans-serif",opacity: loading ? 0.7 : 1}}>
                {loading ? 'Sending...' : 'Get My 10% Off ⚡'}
              </button>
            </form>

            <p style={{fontSize:'0.65rem',color:'rgba(15,15,15,0.35)',textAlign:'center',marginTop:'1rem'}}>No spam. Unsubscribe anytime. Code valid for 7 days.</p>
          </div>
        ) : (
          <div style={{padding:'2.5rem',textAlign:'center'}}>
            <div style={{fontSize:'2.5rem',marginBottom:'1rem'}}>🎵</div>
            <h2 style={{fontFamily:"'Space Grotesk', sans-serif",fontSize:'1.4rem',fontWeight:600,marginBottom:'0.5rem'}}>You're in!</h2>
            <p style={{fontSize:'0.85rem',color:'rgba(15,15,15,0.55)',lineHeight:1.65,marginBottom:'1.5rem'}}>Check your inbox — your 10% discount code is on its way. Valid for 7 days.</p>
            <button onClick={() => setVisible(false)} style={{padding:'0.75rem 2rem',background:'#0f0f0f',color:'#f5f2ed',border:'none',borderRadius:'2px',fontSize:'0.78rem',letterSpacing:'0.1em',textTransform:'uppercase',cursor:'pointer',fontWeight:600,fontFamily:"'Space Grotesk', sans-serif"}}>
              Browse Beats →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
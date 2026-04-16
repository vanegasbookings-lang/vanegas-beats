import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import EmailPopup from './components/EmailPopup'
import Home from './pages/Home'
import Beats from './pages/Beats'
import About from './pages/About'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'
import Music from './pages/Music'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  return (
    <>
      <style>{`
        .fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .fadeOut {
          animation: fadeOut 0.2s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-8px); }
        }
      `}</style>
      <div
        className={transitionStage}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setDisplayLocation(location)
            setTransitionStage('fadeIn')
            window.scrollTo(0, 0)
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/beats" element={<Beats />} />
          <Route path="/about" element={<About />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <EmailPopup />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
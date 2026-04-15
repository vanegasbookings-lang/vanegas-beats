import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Beats from './pages/Beats'
import About from './pages/About'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'
import Music from './pages/Music'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beats" element={<Beats />} />
        <Route path="/about" element={<About />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </BrowserRouter>
  )
}
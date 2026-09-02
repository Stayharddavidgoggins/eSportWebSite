import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Schedule from './components/schedule'
import About from './components/about'
import Contact from './components/contact'
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={
          <>
            <nav>
              <div className="logo">R</div>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            <HomePage />
          </>
        } />
        <Route path="/schedule" element={
          <>
            <nav>
              <div className="logo">R</div>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            <Schedule />
          </>
        } />
        <Route path="/about" element={
          <>
            <nav>
              <div className="logo">R</div>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            <About />
          </>
        } />
        <Route path="/contact" element={
          <>
            <nav>
              <div className="logo">R</div>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
            <Contact />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App

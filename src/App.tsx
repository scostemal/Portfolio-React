import { Routes, Route, Outlet, Link } from 'react-router-dom';
// import React, { lazy, Suspense } from 'react'
import './index.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

// const About = lazy(() => import('./components/About'))
// const Projects = lazy(() => import ('./components/Projects'));
// const Contact = lazy(() => import ('./components/Contact'));

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavWrapper />}>
          <Route path="/"element={<Header />} />
          <Route path='/about' element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Header />
    </>
  )
}

function NavWrapper() {

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    position: 'relative',
  };

  const activeLinkStyle = {
    ...linkStyle,
    content: '',
    // width: '0',
    height: '3px',
    background: '#88022c',
    position: 'absolute',
    left: '0',
    bottom: '-6px',
    transition: '0.75s',
    
  };

  return (
    <>
      <nav>
        <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>Home</Link>
        <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>About</Link>
        <Link to="/projects" style={linkStyle} activeStyle={activeLinkStyle}>Projects</Link>
        <Link to="/services" style={linkStyle} activeStyle={activeLinkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>Contact</Link>
        </nav>
        
          <Outlet />
       
    </>
  )
}
export default App

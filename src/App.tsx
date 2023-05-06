import { Routes, Route, Outlet, NavLink,  } from 'react-router-dom';
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
    // flexWrap: 'FlexWrap | undefined',
    margin: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    // position: 'relative',
  };


  return (
    <>
      <nav>
        <NavLink to="/" style={linkStyle} >Home</NavLink>
        <NavLink to="/about" style={linkStyle} >About</NavLink>
        <NavLink to="/projects" style={linkStyle} >Projects</NavLink>
        <NavLink to="/services" style={linkStyle} >Services</NavLink>
        <NavLink to="/contact" style={linkStyle} >Contact</NavLink>
        </nav>
        
          <Outlet />
       
    </>
  )
}
export default App

import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div>
      <header id="" className="headers fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h1 className="text-light"><NavLink to="/"><span>SUNU ASS</span></NavLink></h1>

          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li ><NavLink className="" to="/">Accueil</NavLink></li>
              <li ><NavLink to="/propos" >A propos</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/portofolio">Portfolio</NavLink></li>
              <li><NavLink to="/team">Equipes</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>

              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Navbar

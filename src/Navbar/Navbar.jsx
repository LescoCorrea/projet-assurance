import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header id="" className="headers fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h1 className="text-light"><a href="/"><span>SUNU ASS</span></a></h1>

          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="active " href="/">Accueil</a></li>
              <li><a href="/propos">A propos</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portofolio">Portfolio</a></li>
              <li><a href="/team">Equipes</a></li>
              <li><a href="/blog">Blog</a></li>

              <li><a href="/contact">Contact Us</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Navbar

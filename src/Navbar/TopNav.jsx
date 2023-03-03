import React from 'react'

const TopNav = () => {

  return (
    <header id="header" class="fixed-top d-flex align-items-center header-transparent p-2">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
        <h1 class="text-light"><a href="index.html"><span>SUNU ASS</span></a></h1>
        
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
  )
}

export default TopNav

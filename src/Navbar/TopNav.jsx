import React, { useState } from 'react';
import "./navbar.css";

const TopNav = () => {

  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBg);

  return (
    <>
      <header id="" className={navbar ? 'header active' : 'fixed-top d-flex align-items-center'}>
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
    </>
  )
}

export default TopNav

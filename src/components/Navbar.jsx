import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container">
    <img  src='https://www.bursa.bel.tr/dosyalar/image/5A.png' height={80} width={80}/>
    
      <a className="navbar-brand" href="#">Bursa Büyükşehir Belediyesi</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
         <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
         <NavLink className="nav-link" to="/contact">İletişim</NavLink>
         <NavLink className="nav-link" to="/applies">Başvurular</NavLink>
         <NavLink className="nav-link" to="/merkezler">Merkezler</NavLink>
      
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const showNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="navbar">
      <h3 className="navbar-logo">Logo</h3>
      <nav className="navbar-menu">
        <a className="navbar-item" href="/#">Home</a>
        <a className="navbar-item" href="/#">My work</a>
        <a className="navbar-item" href="/#">Blog</a>
        <a className="navbar-item" href="/#">About me</a>
      </nav>
      <div className={`navbar-menu-toggle ${navOpen ? 'active' : ''}`} onClick={showNavbar}>
        <div className="navbar-menu-toggle-button"></div>
      </div>

    </header>
  );
}

export default Navbar;

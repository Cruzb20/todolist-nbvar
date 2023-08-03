import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">Brand</div>
      <input type="checkbox" id="click" checked={menuOpen} onChange={handleMenuClick} />
      <label htmlFor="click" className="menu-btn">
        <i className="bx bx-grid-alt"></i>
      </label>
      <ul className={menuOpen ? 'active' : ''}>
        <li>
          <a className="active" data-after="Home" href="#" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#" data-after="About" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#" data-after="Service" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#" data-after="Project" onClick={closeMenu}>
            Project
          </a>
        </li>
        <li>
          <a href="#" data-after="Contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

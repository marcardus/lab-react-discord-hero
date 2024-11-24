import { useState } from 'react';
import Logo from '../../../public/images/discord-logo-white.png';
import MenuICon from '../../../public/images/menu-icon.png';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <button className="navbar-menu">☰</button>
    </nav>
  );
};

export default Navbar;
// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Asegúrate de tener estilos específicos para esta sección

import discordBackground from './src/assets/img/discord-background.png',
import discordLogo from './src/assets/img/discord-logo.png',
import menuIcon from './src/assets/img/menu-icon.png',

export const Hero = () => {
    return (
      <div className="hero-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg"
              alt="Discord logo"
              className="logo"
            />
            <span>Discord</span>
          </div>
          <div className="navbar-menu">
            <button className="menu-button">☰</button>
          </div>
        </nav>
  
        {/* Main Section */}
        <div className="hero-content">
          <h1 className="hero-title">IMAGINE A PLACE...</h1>
          <p className="hero-description">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day and
            hang out more often.
          </p>
  
          {/* Buttons */}
          <div className="hero-buttons">
            <button className="button download-button">Download for Mac</button>
            <button className="button open-browser-button">
              Open Discord in your browser
            </button>
          </div>
        </div>
  
        {/* Hero Image */}
        <div className="hero-image">
          <img
            src="https://example.com/discord-characters.png" // Reemplaza con la URL de la imagen
            alt="Discord Characters"
          />
        </div>
      </div>
    );
  };

export default Hero;

// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="icon.svg" alt="Logo" />
        </div>

        {/* Navigation actions */}
        <div className="navbar-buttons">
          <button className="nav-btn login">Login</button>
          <button className="nav-btn register">Register</button>
        </div>
      </div>
    </nav>
  );
}
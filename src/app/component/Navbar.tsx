"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#!">
            <Image className="navbar-logo" alt="logo" src="/logo.jpg" height={40} width={40} quality={100} />
          </a>
          <p className="navbar-title">TOOBA ILYAS</p>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li><a href="#hero" className="navbar-link">Home</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
          <li><a href="#product" className="navbar-link">Product</a></li>
          <li><a href="#ourstory" className="navbar-link">Our Story</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

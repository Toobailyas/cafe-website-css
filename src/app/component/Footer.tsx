"use client";
import React from "react";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <footer className="footer-content">
        <div className="footer-grid">
        <div className="footer-main">

          <div className="footer-logo">
            <a className="footer-logo-link">
              <Image className="footer-logo-image" src="/logo.jpg" height={50} width={50} alt="logo" />
              <span className="footer-logo-text">TOOBA ILYAS</span>
            </a>
            <p className="footer-description">Contact Us through these platforms & Enjoy good coffee</p>
          </div>
          <div className="footer-links">
            {Array(4).fill(
              <div className="footer-category">
                <h2 className="footer-category-title">CATEGORIES</h2>
                <nav className="footer-category-list">
                  <li><a className="footer-link">First Link</a></li>
                  <li><a className="footer-link">Second Link</a></li>
                  <li><a className="footer-link">Third Link</a></li>
                  <li><a className="footer-link">Fourth Link</a></li>
                </nav>
              </div>
            )}
          </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">© 2024 TOOBA ILYAS — <a className="footer-bottom-link">@Tooba Ilyas</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

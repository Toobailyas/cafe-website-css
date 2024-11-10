"use client";
import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">My Cafe</h1>
          <p className="hero-subtitle">Discover the taste of real coffee</p>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quis quisquam eum itaque consectetur quas. Esse, mollitia! Consequatur natus ipsum distinctio temporibus.
          </p>
          <div>
            <button className="hero-button" type="button">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

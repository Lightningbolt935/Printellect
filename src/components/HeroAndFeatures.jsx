// src/components/HeroAndFeatures.jsx
import React from 'react';
import Lottie from 'lottie-react';
import printAnimation from './print-animation.json'; // ✅ Make sure the path is correct

export default function HeroAndFeatures() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text" data-aos="fade-up">
            <h1 className="hero-heading">Waiting in long queue for printouts?</h1>
            <p className="hero-subtext">
              Get it faster even at the last minute with no wait time! Now all around your campus.
            </p>
            <button className="cta-button">Print Smarter Now</button>
          </div>

          <div className="hero-img" data-aos="fade-left" data-aos-delay="200">
            <Lottie animationData={printAnimation} loop autoplay style={{ width: 400, height: 400 }} />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <h2 className="section-title" data-aos="fade-up">What We Offer</h2>
        <div className="card-wrapper">
          <div className="card users" data-aos="fade-up">
            <h3 className="card-title">For Users</h3>
            <div className="feature"><span className="feature-icon">✔</span>Remote Uploads & Printing – Skip the queue, send your files before you even leave.</div>
            <div className="feature"><span className="feature-icon">✔</span>Live Order Tracking – Know exactly when your document is ready.</div>
            <div className="feature"><span className="feature-icon">✔</span>Smart Shop Matching – Pick trusted local vendors near your college, office, or co-working space.</div>
            <div className="feature"><span className="feature-icon">✔</span>Cashless Payments – Pay securely through your wallet, UPI, or cards.</div>
            <div className="feature"><span className="feature-icon">✔</span>Faster Response – We offer you the privilege of Priority even in crowd.</div>
          </div>

          <div className="card vendors" data-aos="fade-up" data-aos-delay="200">
            <h3 className="card-title">For Vendors</h3>
            <div className="feature"><span className="feature-icon">✔</span>Free Digital Presence – Let users near you find and trust your services.</div>
            <div className="feature"><span className="feature-icon">✔</span>Job Automation – Accept, track, and complete print jobs in one place.</div>
            <div className="feature"><span className="feature-icon">✔</span>Wallet Settlement – Seamless in-app settlements with full transparency.</div>
            <div className="feature"><span className="feature-icon">✔</span>Business Growth – Turn foot traffic into loyal customers through our platform.</div>
          </div>
        </div>
      </section>
    </>
  );
}
import "./globals.css";
import SiteEffects from "@/components/SiteEffects";

export default function HomePage() {
  return (
    <main id="home" tabIndex={-1}>
      {/* Navigation */}
      <header className="navbar" role="banner" aria-label="Primary">
        <a href="#home" className="logo-link" aria-label="Go to home">
          <img
            src="/images/FXT-Picsart-BackgroundRemover.jpeg"
            alt="FXT Appliance Repair Logo"
            className="logo"
            width="160"
            height="160"
            decoding="async"
          />
        </a>

        {/* Hamburger Icon (mobile) */}
        <i className="fas fa-bars menu-toggle" aria-label="Toggle menu"></i>

        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-links" role="list">
            <li><a href="#home" aria-current="page">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>Reliable Appliance Repairs You Can Trust</h1>
          <p>
            Professional, timely, and cost-effective solutions for refrigerators, ovens,
            washers, and more — ensuring your home runs smoothly.
          </p>
          <div className="appointment-bar" role="region" aria-label="Schedule appointment">
            <a
              href="https://pro.housecallpro.com"
              target="_blank"
              rel="noopener"
              className="appointment-btn"
            >
              Schedule Appointment <i className="fas fa-angle-double-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 New Navigation Buttons (Step 10) */}
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="/login" className="appointment-btn">Login</a>
        <a href="/dashboard" className="appointment-btn">Dashboard</a>
        <a href="/book" className="appointment-btn">Book Appointment</a>
        <a href="/status" className="appointment-btn">System Status</a>
      </div>

      {/* --- rest of your existing sections --- */}
      {/* Services, About, Contact, Footer remain unchanged */}

      {/* Floating Phone Button */}
      <a href="tel:+9786093758" className="phone-button" aria-label="Call FXT">
        <i className="fas fa-phone"></i>
      </a>

      {/* Run your original JS safely on the client */}
      <SiteEffects />
    </main>
  );
}

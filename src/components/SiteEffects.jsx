"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    // =====================================================
    // FXT Appliance Repair - Main JavaScript (ported)
    // =====================================================

    // Smooth scrolling for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
          });
        }
      });
    });

    // Smooth reveal animation for service and about sections
    const revealTargets = document.querySelectorAll(".service, .about-text, .services-image");
    const handleRevealOnScroll = () => {
      revealTargets.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
          el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        }
      });
    };

    let rAF;
    const onScrollRAF = () => {
      if (rAF) cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(handleRevealOnScroll);
    };
    window.addEventListener("scroll", onScrollRAF);
    handleRevealOnScroll();

    // Appointment button glow
    const appointmentButton = document.querySelector(".appointment-btn");
    if (appointmentButton) {
      appointmentButton.style.transition = "box-shadow 0.4s ease";
      const enter = () => (appointmentButton.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.75)");
      const leave = () => (appointmentButton.style.boxShadow = "0 0 0 rgba(255, 255, 255, 0)");
      appointmentButton.addEventListener("mouseenter", enter);
      appointmentButton.addEventListener("mouseleave", leave);
    }

    // Intersection Observer for smooth fade-ins
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.style.transition = "opacity 1s ease, transform 1s ease";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach(section => observer.observe(section));

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {
      const toggleMenu = () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.toggle("open");
          menuToggle.classList.toggle("active");
          navLinks.style.transition = "right 0.5s ease, opacity 0.5s ease";
          navLinks.style.opacity = navLinks.classList.contains("open") ? "1" : "0";
          document.body.classList.toggle("menu-open");
        }
      };
      menuToggle.addEventListener("click", toggleMenu);

      navItems.forEach(link => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            navLinks.classList.remove("open");
            menuToggle.classList.remove("active");
            navLinks.style.transition = "right 0.4s ease, opacity 0.4s ease";
            navLinks.style.opacity = "0";
            document.body.classList.remove("menu-open");
          }
        });
      });

      const onResize = () => {
        if (window.innerWidth > 768) {
          navLinks.classList.remove("open");
          menuToggle.classList.remove("active");
          navLinks.style.opacity = "1";
          navLinks.style.transition = "";
          document.body.classList.remove("menu-open");
        }
      };
      window.addEventListener("resize", onResize);
    }

    // Logo fade on scroll
    const logo = document.querySelector(".logo");
    let lastScrollY = 0;
    const onScrollLogo = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 120 && logo) {
        logo.classList.add("hidden");
        logo.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      } else if (logo) {
        logo.classList.remove("hidden");
      }
      lastScrollY = currentScroll;
    };
    window.addEventListener("scroll", onScrollLogo);

    // Navbar hide/show on scroll
    const navbar = document.querySelector(".navbar");
    let lastScrollPosition = window.scrollY;
    const onScrollNavbar = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        navbar?.classList.add("hide");
        if (navbar) navbar.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      } else {
        navbar?.classList.remove("hide");
      }
      lastScrollPosition = currentScrollPosition;
    };
    window.addEventListener("scroll", onScrollNavbar);

    // Keep the top fixed logo (.fixed-top-logo) solid and unaffected by scroll
    const fixedTopLogo = document.querySelector(".fixed-top-logo img");
    if (fixedTopLogo) {
      fixedTopLogo.style.position = "fixed";
      fixedTopLogo.style.top = "0";
      fixedTopLogo.style.left = "50%";
      fixedTopLogo.style.transform = "translateX(-50%)";
      fixedTopLogo.style.zIndex = "99999";
      fixedTopLogo.style.pointerEvents = "none";
      fixedTopLogo.style.transition = "none";
    }

    // Duplicate mobile menu helpers from original script for parity
    const mobileToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".nav-links");
    if (mobileToggle && mobileNav) {
      const clickMobile = () => {
        mobileNav.classList.toggle("open");
        mobileToggle.classList.toggle("active");
        document.body.classList.toggle("menu-open");
      };
      mobileToggle.addEventListener("click", clickMobile);

      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("open");
          mobileToggle.classList.remove("active");
          document.body.classList.remove("menu-open");
        });
      });

      const onResize2 = () => {
        if (window.innerWidth > 768) {
          mobileNav.classList.remove("open");
          mobileToggle.classList.remove("active");
          document.body.classList.remove("menu-open");
        }
      };
      window.addEventListener("resize", onResize2);
    }

    // Another copy (from original DOMContentLoaded block) for exact behavior
    const onDomReady = () => {
      const menuToggle2 = document.querySelector(".menu-toggle");
      const navLinks2 = document.querySelector(".nav-links");

      if (menuToggle2 && navLinks2) {
        const toggle = () => {
          navLinks2.classList.toggle("open");
          document.body.classList.toggle("menu-open");
        };
        menuToggle2.addEventListener("click", toggle);

        document.querySelectorAll(".nav-links a").forEach(link => {
          link.addEventListener("click", () => {
            navLinks2.classList.remove("open");
            document.body.classList.remove("menu-open");
          });
        });

        const onResize3 = () => {
          if (window.innerWidth > 768) {
            navLinks2.classList.remove("open");
            document.body.classList.remove("menu-open");
          }
        };
        window.addEventListener("resize", onResize3);
      }
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", onDomReady);
    } else {
      onDomReady();
    }

    // Cleanup listeners on unmount to prevent duplicates in Fast Refresh
    return () => {
      window.removeEventListener("scroll", onScrollRAF);
      window.removeEventListener("scroll", onScrollLogo);
      window.removeEventListener("scroll", onScrollNavbar);
    };
  }, []);

  return null;
}

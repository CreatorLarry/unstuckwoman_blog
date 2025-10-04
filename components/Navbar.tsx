"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar");
      if (open && navbar && !navbar.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <nav className={`custom-navbar ${scrolled ? 'shrink' : ''}`} id="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="brand">
          Unstuck Woman
        </Link>
        <button 
          className="menu-toggle" 
          id="menuToggle"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${open ? 'active' : ''}`} id="navLinks">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/#brochures" onClick={() => setOpen(false)}>Resources</Link></li>
          <li><Link href="/#testimonials" onClick={() => setOpen(false)}>Testimonials</Link></li>
          <li><Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link></li>
          <li><Link href="/#gallery" onClick={() => setOpen(false)}>Pictorial</Link></li>
          <li><Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li className="social-icons">
            <a href="https://www.linkedin.com/in/mindsetcoachmargaretmungai" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/madgemungai/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/madgemungai/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@madgemungai" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

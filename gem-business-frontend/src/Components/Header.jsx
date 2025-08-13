// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <div className="flex items-center">
        <Link to="/" className="navbar_logo">
          AETHELRED
        </Link>
      </div>
      <nav className="navbar_links">
        <Link to="/products" className="navbar_link">
          Products
        </Link>
        <Link to="/about" className="navbar_link">
          About Us
        </Link>
        <Link to="/contact" className="navbar_link">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative hidden sm:block">
          <input
            className="w-48 rounded-md border border-[var(--border-color)] bg-white py-1.5 pl-3 pr-8 text-sm text-[var(--text-primary)] focus:border-[var(--primary-color)] focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]"
            placeholder="Search..."
            type="search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--text-secondary)] pointer-events-none">
            <span className="material-icons-outlined text-xl">search</span>
          </div>
        </div>
        <button className="md:hidden text-[var(--text-primary)]">
          <span className="material-icons-outlined text-2xl">search</span>
        </button>
        <button className="md:hidden text-[var(--text-primary)]">
          <span className="material-icons-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
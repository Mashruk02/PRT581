'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-emerald-700">AgriSense</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-emerald-600 transition">Home</a>
          <a href="#features" className="hover:text-emerald-600 transition">Features</a>
          <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 text-gray-700 space-y-3">
          <a href="#" className="block">Home</a>
          <a href="#features" className="block">Features</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;

'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-6 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} AgriSense. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

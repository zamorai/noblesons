"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full glass z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Men's Style Logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">Men's Style</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-lg px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43 2a9.06 9.06 0 01-2.88 1.1A4.48 4.48 0 0016.15 0c-2.5 0-4.5 2.03-4.5 4.5 0 .35.04.7.1 1.04A12.8 12.8 0 011.64.88 4.48 4.48 0 003 6.13c0 1.55-.79 2.92-2 3.71a4.48 4.48 0 002.05-.56v.06c0 2.17 1.54 3.97 3.58 4.38a4.48 4.48 0 01-2 .08c.56 1.76 2.2 3.04 4.14 3.08A9 9 0 010 19.54a12.75 12.75 0 006.92 2.02c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.01-.61A9.22 9.22 0 0023 3z" />
            </svg>
          </a>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" d="M18.36 6.64a1 1 0 10-1.41-1.41L12 10.17 7.05 5.22a1 1 0 00-1.41 1.41L10.17 12l-4.55 4.55a1 1 0 001.41 1.41L12 13.83l4.95 4.95a1 1 0 001.41-1.41L13.83 12l4.55-4.55z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md glass">
          <div className="container mx-auto flex flex-col p-4 space-y-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link href="/">
              <a className="text-gray-800 hover:text-blue-500">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 hover:text-blue-500">About</a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

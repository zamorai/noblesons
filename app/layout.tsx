import './globals.css';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <div className="absolute -translate-y-1/2 bg-cover bg-center w-screen h-screen" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
      <div className="absolute -translate-y-1/2 h-screen inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90"></div>
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;

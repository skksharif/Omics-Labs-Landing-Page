import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img src="./logo.png" alt="Omics Laboratories" className="h-8" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#experts" className="text-gray-700 hover:text-blue-600">Experts</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book a Test
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#experts" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Experts</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book a Test
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
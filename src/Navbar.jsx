import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // Icons (optional)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            MySite
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {/* {isOpen ? <X size={28} /> : <Menu size={28} />} */}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

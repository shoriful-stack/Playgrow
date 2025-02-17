import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F7F3F0] shadow-md font-Jost">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-lg">-
          NEWSLETTER
        </Link>
        
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-pink-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="hover:text-pink-500 transition duration-300">
              Shop
            </button>
            <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg p-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/shop-list" className="block hover:text-pink-500">
                Shop List
              </Link>
              <Link to="/shop-single" className="block hover:text-pink-500">
                Shop Single
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-pink-500 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-pink-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg space-y-4 p-4">
          <li>
            <Link to="/" className="block text-gray-800 hover:text-pink-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop-list"
              className="block text-gray-800 hover:text-pink-500"
            >
              Shop List
            </Link>
          </li>
          <li>
            <Link
              to="/shop-single"
              className="block text-gray-800 hover:text-pink-500"
            >
              Shop Single
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-800 hover:text-pink-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-800 hover:text-pink-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
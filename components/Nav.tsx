"use client";

import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-100 shadow-xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <h1 className="text-xl font-semibold tracking-wide">STACBRIDGE</h1>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // Close icon
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">HOME</li>
          <li className="hover:text-black cursor-pointer">ABOUT</li>
          <li className="hover:text-black cursor-pointer">WHAT WE DO</li>
          <li className="hover:text-black cursor-pointer">LEADERSHIP</li>
          <li className="hover:text-black cursor-pointer">CONTACT</li>
        </ul>
      </div>

      {/* Mobile menu */}
      <ul
        className={`md:hidden flex flex-col gap-4 mt-4 text-gray-700 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <li className="hover:text-black cursor-pointer">HOME</li>
        <li className="hover:text-black cursor-pointer">ABOUT</li>
        <li className="hover:text-black cursor-pointer">WHAT WE DO</li>
        <li className="hover:text-black cursor-pointer">LEADERSHIP</li>
        <li className="hover:text-black cursor-pointer">CONTACT</li>
      </ul>
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/featured"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors text-sm font-light tracking-wider`}
            >
              Featured
            </Link>
            <Link
              href="/properties"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors text-sm font-light tracking-wider`}
            >
              Properties
            </Link>
            <Link
              href="/about"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors text-sm font-light tracking-wider`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors text-sm font-light tracking-wider`}
            >
              Contact
            </Link>
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className={`text-2xl font-light tracking-widest ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              ESTATE EASY
            </h1>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <button
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors text-sm font-light tracking-wider`}
              aria-label="Language Selection"
            >
              EN
            </button>
            <button
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors`}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <button
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-white-500 transition-colors`}
              aria-label="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
            <button
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors`}
              aria-label="User Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </button>
            <button
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-gray-500 transition-colors`}
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '../constants/company';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg text-gray-900' 
          : 'bg-transparent text-white/95'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'
            }`}>{COMPANY.SHORT_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-[15px] hover:text-blue-400 transition-colors ${
                  scrolled 
                    ? 'text-gray-900 hover:text-blue-600' 
                    : 'text-white/95 drop-shadow-md hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className={`px-4 py-2 rounded-lg font-bold text-[15px] shadow-md hover:shadow-lg ${
                scrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white/95 text-blue-600 hover:bg-white'
              } transition-all`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute w-full h-0.5 transition-all ${
                  scrolled ? 'bg-gray-900' : 'bg-white drop-shadow-md'
                } ${isOpen ? 'top-3 rotate-45' : 'top-1'}`}
              />
              <span
                className={`absolute w-full h-0.5 top-3 ${
                  scrolled ? 'bg-gray-900' : 'bg-white drop-shadow-md'
                } ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute w-full h-0.5 transition-all ${
                  scrolled ? 'bg-gray-900' : 'bg-white drop-shadow-md'
                } ${isOpen ? 'top-3 -rotate-45' : 'top-5'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg font-medium text-gray-900 hover:bg-gray-100/70 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/quote"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

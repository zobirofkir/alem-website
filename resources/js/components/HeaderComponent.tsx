import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * Vérifier la préférence système pour le mode sombre
   */
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    /**
     * Écouter les changements de préférence système
     */
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      setIsDarkMode(e.matches);
    });
  }, []);

  /**
   * Liens de navigation
   */
  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'À propos', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nom Copper au lieu du logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <span className={`text-xl font-bold ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                Copper
              </span>
            </a>
          </div>

          {/* Navigation Bureau */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-bold border-b-2 transition-colors duration-200  ${
                  isDarkMode 
                    ? 'border-transparent hover:border-amber-400 hover:text-amber-400' 
                    : 'border-transparent hover:border-amber-600 hover:text-amber-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              } focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {/* Icône quand le menu est fermé */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile, afficher/cacher selon l'état du menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-amber-400' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ligne d'accent dorée */}
      <div className={`h-0.5 w-full ${isDarkMode ? 'bg-amber-400' : 'bg-amber-600'}`}></div>
    </header>
  );
};

export default HeaderComponent;
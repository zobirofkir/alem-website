import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { scrollY } = useScroll();
  
  /**
   * Gérer l'affichage du header en fonction du défilement
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen) return;
    
    const direction = latest > lastScrollY ? "down" : "up";
    
    const shouldHide = latest > 100 && direction === "down";
    const shouldShow = direction === "up";
    
    /**
     * Mettre à jour la visibilité
     */
    if (shouldHide !== !isVisible) setIsVisible(!shouldHide);
    
    /**
     * Mémoriser la position actuelle pour la prochaine comparaison
     */
    setLastScrollY(latest);
  });

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
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/abouts' },
    { name: 'Spécialités', href: '/specialites' },
    { name: 'Reproduction', href: '/reproductions' },
    { name: 'Analyses', href: '/analyses' },
    { name: 'Radio', href: '/radios' },
    { name: 'À domicile', href: '/prelevements' },
    { name: 'Contact', href: '/contacts' },
  ];
  
  // Lien Rendez-vous séparé pour un style spécial
  const appointmentLink = { name: 'Rendez-vous', href: '/rendez-vous' };
  
  /**
   * Variantes d'animation pour le header
   */
  const headerVariants = {
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    },
    hidden: { 
      y: -100, 
      opacity: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      className={`fixed w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} shadow-lg`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nom Alem au lieu du logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center">
              <span className={`text-xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                Alem
              </span>
            </a>
          </motion.div>

          {/* Navigation Bureau */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-1 pt-1 text-sm font-bold border-b-2 transition-colors duration-200 ${
                  isDarkMode 
                    ? 'border-transparent hover:border-green-400 hover:text-green-400' 
                    : 'border-transparent hover:border-green-600 hover:text-green-600'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Bouton Rendez-vous avec fond vert */}
            <motion.a
              href={appointmentLink.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 inline-flex items-center px-4 py-2 rounded-md text-sm font-bold text-white ${
                isDarkMode ? 'bg-green-500' : 'bg-green-600'
              } transition-colors duration-200 shadow-md`}
            >
              {appointmentLink.name}
            </motion.a>
          </nav>

          {/* Bouton menu mobile */}
          <div className="flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              } focus:outline-none`}
              aria-expanded="false"
            >
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
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu mobile comme sidebar animée */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar animée */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed top-0 right-0 h-full w-64 md:hidden shadow-2xl ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } z-50 overflow-y-auto`}
            >
              {/* En-tête du menu */}
              <div className={`flex justify-between items-center p-4 border-b ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <span className={`font-bold text-lg ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Alem</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className={`p-1 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Liens de navigation */}
              <div className="py-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(243, 244, 246, 0.8)' }}
                    whileTap={{ scale: 0.95 }}
                    className={`block px-4 py-3 mx-2 my-1 rounded-lg text-base font-medium transition-all ${
                      isDarkMode 
                        ? 'text-gray-200 hover:text-green-400' 
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                {/* Bouton Rendez-vous spécial */}
                <motion.a
                  href={appointmentLink.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block mx-4 mt-6 mb-2 px-4 py-3 rounded-lg text-base font-bold text-center text-white ${
                    isDarkMode ? 'bg-green-500' : 'bg-green-600'
                  } shadow-md`}
                >
                  {appointmentLink.name}
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Ligne d'accent dorée avec animation */}
      <motion.div 
        className={`h-0.5 w-full ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      ></motion.div>
    </motion.header>
  );
};

export default HeaderComponent;
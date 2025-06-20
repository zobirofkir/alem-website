import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(prefersDark.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    prefersDark.addEventListener('change', handleChange);
    
    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/#' },
    { name: 'À propos', href: '/#abouts' },
    { name: 'Spécialités', href: '/#specialites' },
    { name: 'Reproduction', href: '/#reproductions' },
    { name: 'Analyses', href: '/#analyses' },
    { name: 'Radio', href: '/#radios' },
    { name: 'À domicile', href: '/#prelevements' },
    { name: 'Contact', href: '/#contacts' },
  ];

  return (
    <footer className={`mt-auto border-t ${isDarkMode ? 'bg-black text-gray-200 border-gray-700' : 'bg-white text-gray-800 border-gray-200'} transition-colors duration-300`}>
      
      {/* Ligne d'accent */}
      <div className={`h-1 w-full ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Gauche : Marque */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} NL Digital Agency. Tous droits réservés.
            </p>
          </div>

          {/* Centre : Liens de navigation */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-green-500 transition">
                {link.name}
              </a>
            ))}
          </div>

          {/* Droite : Réseaux sociaux */}
          <div className="flex space-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

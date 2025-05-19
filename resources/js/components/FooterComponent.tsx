import React, { useEffect, useState } from 'react';

const FooterComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    /**
     * Vérifier la préférence système pour le mode sombre
     */
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

  return (
    <footer className={`mt-auto py-8 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      {/* Ligne d'accent dorée */}
      <div className={`h-0.5 w-full ${isDarkMode ? 'bg-amber-400' : 'bg-amber-600'}`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo et copyright */}
          <div className="mb-4 md:mb-0">
            <div className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
              Copper
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Copper. Tous droits réservés.
            </p>
          </div>
          
          {/* Liens rapides */}
          <div className="flex space-x-6">
            <a href="#" className={`text-sm hover:underline ${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'}`}>
              Mentions légales
            </a>
            <a href="#" className={`text-sm hover:underline ${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'}`}>
              Politique de confidentialité
            </a>
            <a href="#" className={`text-sm hover:underline ${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'}`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
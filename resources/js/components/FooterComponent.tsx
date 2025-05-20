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
    <footer className={`mt-auto py-8 transition-colors duration-300 ${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-gray-800'}`}>
      {/* Ligne d'accent dorée */}
      <div className={`h-0.5 w-full ${isDarkMode ? 'bg-amber-400' : 'bg-amber-600'}`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Logo et copyright */}
          <div className="mb-4 md:mb-0 ">
            <p className="text-sm font-bold">
              &copy; {new Date().getFullYear()} Copper. Tous droits réservés.
            </p>
          </div>          
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
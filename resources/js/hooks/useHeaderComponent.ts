import { useState, useEffect } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export const useHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { scrollY } = useScroll();
  
  /**
   * Handle header visibility based on scroll direction
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isOpen) return;
    
    const direction = latest > lastScrollY ? "down" : "up";
    
    const shouldHide = latest > 100 && direction === "down";
    const shouldShow = direction === "up";
    
    if (shouldHide !== !isVisible) setIsVisible(!shouldHide);
    
    setLastScrollY(latest);
  });

  /**
   * Check system preference for dark mode
   */
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Navigation links
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
  
  /**
   * Special appointment link
   */
  const appointmentLink = { name: 'Rendez-vous', href: '/rendez-vous' };
  
  /**
   * Animation variants for header
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

  return {
    isOpen,
    isDarkMode,
    isVisible,
    navLinks,
    appointmentLink,
    headerVariants,
    toggleMenu,
    closeMenu,
    setIsOpen
  };
};

export default useHeaderComponent;
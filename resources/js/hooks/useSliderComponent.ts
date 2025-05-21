import { useState, useEffect, useCallback } from 'react';

interface SlideType {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface UseSliderProps {
  slides: SlideType[];
  autoPlay?: boolean;
  interval?: number;
  theme?: 'light' | 'dark' | 'auto';
}

export const useSliderComponent = ({
  slides,
  autoPlay = true,
  interval = 5000,
  theme = 'auto',
}: UseSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Detect system color scheme preference
  useEffect(() => {
    if (theme !== 'auto') {
      setIsDarkMode(theme === 'dark');
      return;
    }
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Auto-play functionality
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, nextSlide]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious();
    }
  };

  // Mouse handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return {
    currentIndex,
    direction,
    isDarkMode,
    slideVariants,
    goToPrevious,
    goToNext,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseEnter,
    handleMouseLeave,
    currentSlide: slides[currentIndex],
    interval,
    isPaused,
    setIsPaused,
  };
};

export default useSliderComponent;
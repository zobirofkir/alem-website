import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface SliderProps {
  slides: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
}

const SliderComponent: React.FC<SliderProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
  className,
  theme = 'auto',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
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

  /**
   * Auto-play functionality
   */
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length, isPaused]);

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

  /**
   * Variants for animations
   */
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  /**
   * Touch handling for mobile swipe
   */
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      /**
       * Swipe left
       */
      goToNext();
    }

    if (touchStart - touchEnd < -50) {
      /**
       * Swipe right
       */
      goToPrevious();
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden rounded-xl transition-colors", 
        isDarkMode ? "bg-gray-900" : "bg-white",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main slider */}
      <div className="relative h-screen w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="object-cover w-full h-full"
              />
              
              {/* Content overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t to-transparent",
                isDarkMode 
                  ? "from-black/80" 
                  : "from-black/60"
              )} />
              
              {/* Text content */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">{slides[currentIndex].title}</h2>
                <p className="text-sm md:text-base opacity-90 max-w-2xl text-gray-100">{slides[currentIndex].description}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-sm transition-all text-white",
          isDarkMode 
            ? "bg-white/10 hover:bg-white/20" 
            : "bg-black/30 hover:bg-black/50"
        )}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-sm transition-all text-white",
          isDarkMode 
            ? "bg-white/10 hover:bg-white/20" 
            : "bg-black/30 hover:bg-black/50"
        )}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex 
                ? "bg-alem-500 w-6" 
                : `${isDarkMode ? "bg-gray-400/50 hover:bg-gray-400/80" : "bg-gray-600/50 hover:bg-gray-600/80"} w-2`
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
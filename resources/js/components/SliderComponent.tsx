import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import useSliderComponent from '@/hooks/useSliderComponent';

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

  const {
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
    currentSlide,
    interval: sliderInterval,
    isPaused,
    setIsPaused,
  } = useSliderComponent({
    slides,
    autoPlay,
    interval,
    theme,
  });
  

  return (
    <div 
      className={cn(
        "relative w-full h-screen overflow-hidden rounded-xl shadow-xl transition-colors mt-17", 
        isDarkMode ? "bg-gray-900" : "bg-white",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-gray-200 dark:bg-gray-700">
        <motion.div 
          className="h-full bg-green-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: interval / 1000, ease: "linear" }}
          key={currentIndex}
        />
      </div>

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
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              {/* Image with overlay */}
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="object-cover w-full h-full"
              />
              
              {/* Content overlay with medical-themed gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-800/40 to-transparent" />
              
              {/* Text content with medical info */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                <motion.div 
                  className="max-w-4xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">{slides[currentIndex].title}</h2>
                  <p className="text-lg md:text-xl mb-6 text-white/90">{slides[currentIndex].description}</p>
                  
                  {/* Medical services badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
                      🔬 Innovation médicale
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
                      👶 Biologie de la reproduction
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm flex items-center">
                      🧪 Analyses rapides & fiables
                    </span>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Prendre Rendez-vous
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows with improved design */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-green-600 backdrop-blur-md transition-all text-white border border-white/20 z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-green-600 backdrop-blur-md transition-all text-white border border-white/20 z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Improved dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              index === currentIndex 
                ? "bg-green-600 w-8" 
                : "bg-white/40 hover:bg-white/60 w-2.5"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Doctor info badge */}
      {/* <div className="absolute top-20 lg:left-6 left-1 z-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        <p className="text-white font-medium">Dr Nabil Alem | Spécialiste en biologie médicale</p>
      </div> */}
    </div>
  );
};

export default SliderComponent;
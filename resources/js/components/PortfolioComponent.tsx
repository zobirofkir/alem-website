import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { portfolioItems } from '@/data/PortfolioData';
import { PortfolioItem } from './portfolio/PortfolioItem';

const PortfolioComponent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
    
  const filters = ['Tous', 'Infertilité', 'Laboratoire', 'Services', 'Spécialité'];
  
  const filteredItems = activeFilter === 'Tous' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-zinc-900 bg-opacity-50 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1469')] bg-fixed bg-blend-overlay">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl mx-auto"
          >
            🔬 L'innovation au service de la santé
          </motion.p>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-500 font-medium uppercase tracking-wider"
          >
            Dr Nabil Alem - Spécialiste en biologie médicale et radio-biologie
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900 dark:text-white"
          >
            Nos Services
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-20 h-1 bg-green-500 mx-auto mt-4 mb-8"
          />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-green-500 text-white' 
                  : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const originalIndex = portfolioItems.findIndex(
              portfolioItem => portfolioItem.title === item.title && portfolioItem.category === item.category
            );
            
            return (
              <PortfolioItem
                key={index}
                title={item.title}
                category={item.category}
                image={item.image}
                delay={index * 0.1}
                index={originalIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;

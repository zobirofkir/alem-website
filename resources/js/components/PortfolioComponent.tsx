import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, image, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
      >
        <span className="text-green-500 text-sm font-medium mb-1">{category}</span>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </motion.div>
    </motion.div>
  );
};

const PortfolioComponent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  
  const portfolioItems = [
    {
      title: "Biologie de la reproduction",
      category: "Infertilité",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470"
    },
    {
      title: "Analyses médicales rapides",
      category: "Laboratoire",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1470"
    },
    {
      title: "Prélèvement à domicile",
      category: "Services",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1472"
    },
    {
      title: "Équipement de pointe",
      category: "Technologie",
      image: "https://images.unsplash.com/photo-1666214277657-e60f05c40b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Radio-biologie",
      category: "Spécialité",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1470"
    },
    {
      title: "Résultats fiables",
      category: "Qualité",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1480"
    }
  ];
  
  const filters = ['Tous', 'Laboratoire', 'Infertilité', 'Services', 'Technologie', 'Spécialité', 'Qualité'];
  
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
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
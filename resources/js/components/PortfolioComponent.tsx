import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <span className="text-amber-500 text-sm font-medium mb-1">{category}</span>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </motion.div>
    </motion.div>
  );
};

const PortfolioComponent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  
  const portfolioItems = [
    {
      title: "Application Mobile Bancaire",
      category: "Développement Mobile",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470"
    },
    {
      title: "Site E-commerce Moderne",
      category: "Développement Web",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1528"
    },
    {
      title: "Interface Utilisateur Dashboard",
      category: "Design UI/UX",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470"
    },
    {
      title: "Campagne Marketing Digital",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415"
    },
    {
      title: "Identité de Marque Complète",
      category: "Stratégie de Marque",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1374"
    },
    {
      title: "Infrastructure Cloud Évolutive",
      category: "Solutions Cloud",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470"
    }
  ];
  
  const filters = ['Tous', 'Développement Web', 'Design UI/UX', 'Développement Mobile', 'Marketing Digital', 'Stratégie de Marque', 'Solutions Cloud'];
  
  const filteredItems = activeFilter === 'Tous' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-500 font-medium uppercase tracking-wider"
          >
            Nos Travaux Récents
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mt-2 text-zinc-900 dark:text-white"
          >
            Portfolio
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-20 h-1 bg-amber-500 mx-auto mt-4 mb-8"
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
                  ? 'bg-amber-500 text-white' 
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
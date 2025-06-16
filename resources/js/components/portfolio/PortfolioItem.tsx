import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
  index: number;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, image, delay = 0, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <Link href="#">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay }}
          className="relative overflow-hidden rounded-xl group cursor-pointer"
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
      </Link>
    );
  };
  
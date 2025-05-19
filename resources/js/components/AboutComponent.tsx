import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface AboutProps {
  className?: string;
}

const AboutComponent: React.FC<AboutProps> = ({ className }) => {
  return (
    <section className={cn("py-16 px-4 md:px-8", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-amber-600">Copper</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-amber-100 dark:bg-amber-900/20">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                alt="Copper Portfolio"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ width: '100%' }}
                whileInView={{ width: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-amber-600 z-10"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-full hidden md:block" />
          </motion.div>

          {/* Right column: Content with staggered animations */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Copper is a creative portfolio showcasing innovative digital solutions 
                and cutting-edge designs. With a focus on quality and attention to detail, 
                we transform ideas into impactful digital experiences.
              </p>

              {/* Stats with counter animation */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <span className="text-3xl font-bold text-amber-600">10+</span>
                  <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <span className="text-3xl font-bold text-amber-600">200+</span>
                  <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                </motion.div>
              </div>

              {/* CTA Button with hover animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
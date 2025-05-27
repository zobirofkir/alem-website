import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { specialites } from '@/data/SpecialiteData';

interface SpecialiteProps {
  className?: string;
}

const SpecialiteComponent: React.FC<SpecialiteProps> = ({ className }) => {

  return (
    <section className={cn("py-16 px-4 md:px-8 bg-white dark:bg-black transition-colors mt-10", className)} id='specialites'>
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
            Nos <span className="text-green-600">Spécialités</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Content with doctor info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                Dr Nabil Alem
              </h3>
              <p className="text-green-600 font-medium mb-4">
                Spécialiste en biologie médicale et radio-biologie
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Avec une expertise approfondie et des années d'expérience, Dr Alem offre des services 
                médicaux de haute qualité, combinant précision scientifique et approche humaine pour 
                chaque patient.
              </p>
              
              {/* CTA Button with hover animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <a href="/rendez-vous">
                  Prendre Rendez-vous
                </a>
              </motion.button>
            </div>
          </motion.div>

          {/* Right column: Image with animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-green-100 dark:bg-green-900/20">
              <img
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laboratoire médical"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ width: '100%' }}
                whileInView={{ width: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 bg-green-600 z-10"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-600 rounded-full hidden md:block" />
          </motion.div>
        </div>

        {/* Specialties grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialites.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SpecialiteComponent;
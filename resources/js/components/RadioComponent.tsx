import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface RadioProps {
  className?: string;
}

const RadioComponent: React.FC<RadioProps> = ({ className }) => {
  const services = [
    {
      title: "Radiobiologie cellulaire",
      description: "Étude des effets des rayonnements sur les cellules et les tissus biologiques."
    },
    {
      title: "Dosimétrie biologique",
      description: "Évaluation précise des doses de rayonnement reçues par les tissus."
    },
    {
      title: "Radioprotection",
      description: "Mesures et conseils pour la protection contre les rayonnements ionisants."
    },
    {
      title: "Analyses post-exposition",
      description: "Évaluation des effets biologiques après exposition aux rayonnements."
    }
  ];

  return (
    <section className={cn("py-16 px-4 md:px-8 bg-white dark:bg-black transition-colors mt-10", className)}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Radio-<span className="text-green-600">Biologie</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Expertise en radiobiologie
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre laboratoire spécialisé en radio-biologie étudie les effets des rayonnements 
              ionisants sur les organismes vivants. Nous combinons des techniques avancées 
              d'analyse biologique et de physique des rayonnements pour offrir des services 
              de pointe en matière de diagnostic et de recherche.
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-2">Applications cliniques</h4>
              <ul className="space-y-1">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-600">•</span>
                  Diagnostic des effets des rayonnements
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-600">•</span>
                  Suivi des traitements radiothérapeutiques
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="mr-2 text-green-600">•</span>
                  Évaluation des risques d'exposition
                </li>
              </ul>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-green-100 dark:bg-green-900/20">
              <img
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laboratoire de radiobiologie"
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
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100"
          >
            Nos services en radio-biologie
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioComponent;
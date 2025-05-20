import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { analyses } from '@/data/AnalyseData';

interface AnalyseProps {
  className?: string;
}

const AnalyseComponent: React.FC<AnalyseProps> = ({ className }) => {

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
            Analyses <span className="text-green-600">Médicales</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-green-100 dark:bg-green-900/20">
              <img
                src="https://plus.unsplash.com/premium_photo-1663032618920-6cc64f857e65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laboratoire d'analyses"
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

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Analyses rapides & fiables
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre laboratoire propose une gamme complète d'analyses médicales réalisées avec 
              des équipements de dernière génération. Nous garantissons des résultats précis dans 
              les meilleurs délais, avec la possibilité de prélèvements à domicile pour votre confort.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100">Résultats rapides</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Disponibles en ligne ou par email</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-100">Prélèvement à domicile</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Service disponible sur rendez-vous</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
            Nos types d'analyses
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analyses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">{item.category}</h4>
                <ul className="space-y-2">
                  {item.tests.map((test, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2 text-green-600">•</span>
                      {test}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Prendre rendez-vous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyseComponent;
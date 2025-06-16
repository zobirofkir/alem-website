import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { avantages, steps } from '@/data/PrelevementData';
import PrelevementImage from '../assets/posts/prelevement-post.jpg';

interface PrelevementProps {
  className?: string;
}

const PrelevementComponent: React.FC<PrelevementProps> = ({ className }) => {

  return (
    <section className={cn("py-16 px-4 md:px-8 bg-white dark:bg-black transition-colors mt-10", className)} id='prelevements'>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Prélèvement à <span className="text-green-600">Domicile</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Un service adapté à vos besoins
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Notre service de prélèvement à domicile vous permet de réaliser vos analyses 
              médicales sans vous déplacer. Une équipe de professionnels qualifiés se rend 
              chez vous pour effectuer les prélèvements dans les meilleures conditions de 
              confort et de sécurité.
            </p>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg mb-6">
              <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-3">Comment ça marche ?</h4>
              <ol className="space-y-2">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="font-medium text-green-600 mr-2">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Prendre rendez-vous
            </motion.button> */}
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-green-100 dark:bg-green-900/20">
              <img
                src={PrelevementImage}
                alt="Prélèvement à domicile"
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
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-600 rounded-full hidden md:block" />
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
            Présentation du service à domicile
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Villes couvertes</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Casablanca, Rabat, Marrakech, Tanger et leurs périphéries. Contactez-nous pour vérifier la disponibilité dans votre zone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Délai de réponse</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Intervention à domicile sous 24h à 48h après votre demande. Service express disponible pour les cas urgents.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-green-50 dark:bg-green-900/20 p-6 rounded-xl"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Démarche simple et sécurisée</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Le service de prélèvement à domicile est disponible sur rendez-vous, 
              du lundi au samedi, de 7h à 12h. Nos professionnels respectent strictement 
              les protocoles sanitaires pour garantir votre sécurité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrelevementComponent;
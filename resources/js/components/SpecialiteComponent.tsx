import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface SpecialiteProps {
  className?: string;
}

const SpecialiteComponent: React.FC<SpecialiteProps> = ({ className }) => {
  const specialites = [
    {
      icon: "🔬",
      title: "L'innovation au service de la santé",
      description: "Utilisation des technologies de pointe pour des diagnostics précis et fiables."
    },
    {
      icon: "👶",
      title: "Biologie de la reproduction - Infertilité",
      description: "Expertise spécialisée dans le traitement et le diagnostic des problèmes de fertilité."
    },
    {
      icon: "🧪",
      title: "Analyses médicales rapides & fiables",
      description: "Résultats précis dans les meilleurs délais pour une prise en charge optimale."
    },
    {
      icon: "🏡",
      title: "Prélèvement à domicile",
      description: "Service personnalisé pour votre confort et votre tranquillité d'esprit."
    }
  ];

  return (
    <section className={cn("py-16 px-4 md:px-8 bg-white dark:bg-black transition-colors mt-10", className)}>
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
                Prendre Rendez-vous
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
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Notre laboratoire s'engage à fournir des analyses médicales de la plus haute qualité, 
            avec une attention particulière portée au confort et à la satisfaction de nos patients.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Découvrir nos services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialiteComponent;
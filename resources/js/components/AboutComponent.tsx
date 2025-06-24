import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import AboutPost from '../assets/posts/about-us.jpg';

interface AboutProps {
  className?: string;
}

const AboutComponent: React.FC<AboutProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "py-16 px-4 md:px-8 bg-white dark:bg-black transition-colors mt-10",
        className
      )}
      id="abouts"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            À propos de <span className="text-green-600">Dr Alem</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-green-100 dark:bg-green-900/20">
              <img
                src={AboutPost}
                alt="Dr Nabil Alem"
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

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Portrait du Dr. Nabil Alem
              </h3>
              <p className="text-green-600 font-medium mb-4">
                Spécialiste en biologie médicale et radio-biologie
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Diplômes & spécialités
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Docteur en biologie médicale et radio-biologie, avec une expertise particulière
                  dans le diagnostic et le suivi des pathologies complexes.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Expérience et approche patient
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Avec une expertise approfondie dans le domaine de la biologie médicale,
                  Dr Alem offre des services de haute qualité, combinant innovation scientifique
                  et approche personnalisée pour chaque patient.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Membre de sociétés savantes
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Membre actif de plusieurs sociétés scientifiques reconnues dans le domaine
                  de la biologie médicale et de la radio-biologie.
                </p>
              </div>

              {/* Call to action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <a href="#rendez-vous">
                  Prendre Rendez-vous
                </a>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;

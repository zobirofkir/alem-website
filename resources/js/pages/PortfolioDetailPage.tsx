import React from 'react';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import { portfolioItems } from '@/data/PortfolioData';

interface Props {
  id: string;
}

const PortfolioDetailPage: React.FC<Props> = ({ id }) => {
  const itemIndex = parseInt(id);
  const item = portfolioItems[itemIndex];

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <Head title={item.title} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <Link 
              href="/"
              className="flex items-center text-green-500 hover:text-green-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour
            </Link>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl transition-colors duration-300">
            <div className="h-64 sm:h-80 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
                {item.category}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
                {item.title}
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 transition-colors duration-300">
                  {item.description}
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 dark:text-white text-black">Nos engagements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li className='dark:text-white text-black'>Équipement médical de dernière génération</li>
                  <li className='dark:text-white text-black'>Personnel hautement qualifié</li>
                  <li className='dark:text-white text-black'>Résultats rapides et fiables</li>
                  <li className='dark:text-white text-black'>Accompagnement personnalisé</li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-6 mb-3 dark:text-white text-black">Informations pratiques</h2>
                <p className='dark:text-white text-black'>
                  Pour plus d'informations ou pour prendre rendez-vous, n'hésitez pas à nous contacter.
                  Notre équipe est à votre disposition pour répondre à toutes vos questions.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/rendez-vous" 
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    Prendre rendez-vous
                  </Link>
                  <Link 
                    href="/contacts" 
                    className="inline-block bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-800 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioDetailPage;
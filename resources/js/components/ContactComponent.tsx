import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface ContactComponentProps {
  theme?: 'light' | 'dark' | 'auto';
}

const ContactComponent: React.FC<ContactComponentProps> = ({ theme = 'auto' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (theme !== 'auto') {
      setIsDarkMode(theme === 'dark');
      return;
    }
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>,
      title: "Email",
      info: "contact@Alem.com"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>,
      title: "Téléphone",
      info: "+33 1 23 45 67 89"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>,
      title: "Adresse",
      info: "123 Avenue des Champs-Élysées, Paris"
    }
  ];

  return (
    <section id="contact" className={cn(
      "py-20 transition-colors",
      isDarkMode ? "bg-black" : "bg-white"
    )}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-500 font-medium uppercase tracking-wider"
          >
            Restons en Contact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={cn(
              "text-4xl md:text-5xl font-bold mt-2",
              isDarkMode ? "text-white" : "text-zinc-900"
            )}
          >
            Contactez-Nous
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="w-20 h-1 bg-green-500 mx-auto mt-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "backdrop-blur-sm rounded-xl p-6 shadow-lg text-center",
                isDarkMode 
                  ? "bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 border border-zinc-800/50" 
                  : "bg-white border border-zinc-200/50"
              )}
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="w-12 h-12 mb-4 text-green-500 flex items-center justify-center rounded-lg bg-green-500/10 mx-auto"
              >
                {item.icon}
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className={cn(
                  "text-xl font-semibold mb-2",
                  isDarkMode ? "text-white" : "text-zinc-800"
                )}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                className={isDarkMode ? "text-zinc-400" : "text-zinc-600"}
              >
                {item.info}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={cn(
            "backdrop-blur-sm rounded-xl p-8 shadow-lg",
            isDarkMode 
              ? "bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 border border-zinc-800/50" 
              : "bg-white border border-zinc-200/50"
          )}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="name" className={cn(
                  "block mb-2",
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                )}>Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500",
                    isDarkMode 
                      ? "bg-zinc-800/50 border border-zinc-700 text-white" 
                      : "bg-gray-50 border border-gray-200 text-gray-900"
                  )}
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="email" className={cn(
                  "block mb-2",
                  isDarkMode ? "text-zinc-400" : "text-zinc-600"
                )}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500",
                    isDarkMode 
                      ? "bg-zinc-800/50 border border-zinc-700 text-white" 
                      : "bg-gray-50 border border-gray-200 text-gray-900"
                  )}
                  required
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <label htmlFor="subject" className={cn(
                "block mb-2",
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              )}>Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={cn(
                  "w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500",
                  isDarkMode 
                    ? "bg-zinc-800/50 border border-zinc-700 text-white" 
                    : "bg-gray-50 border border-gray-200 text-gray-900"
                )}
                required
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6"
            >
              <label htmlFor="message" className={cn(
                "block mb-2",
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              )}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={cn(
                  "w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500",
                  isDarkMode 
                    ? "bg-zinc-800/50 border border-zinc-700 text-white" 
                    : "bg-gray-50 border border-gray-200 text-gray-900"
                )}
                required
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Envoyer le Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactComponent;
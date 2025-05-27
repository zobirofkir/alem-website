import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import useContactComponent from '../hooks/useContactComponent';

interface ContactComponentProps {
  theme?: 'light' | 'dark' | 'auto';
}

const ContactComponent: React.FC<ContactComponentProps> = ({ theme = 'auto' }) => {
  const {
    formData,
    isDarkMode,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useContactComponent({ theme });

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
      info: "+212 600000000"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>,
      title: "Adresse",
      info: "123 Fés Atlas Testing Address"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
      title: "Horaires",
      info: "Lun-Ven: 8h-18h | Sam: 9h-13h"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
            </svg>,
      title: "WhatsApp",
      info: "+212 700000000",
      isWhatsApp: true
    }
  ];


  return (
    <section id="contacts" className={cn(
      "py-20 transition-colors",
      isDarkMode ? "bg-black" : "bg-white"
    )} >
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
              
              {item.isWhatsApp && (
                <motion.a
                  href={`https://wa.me/${item.info.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  className="mt-3 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  WhatsApp
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={cn(
            "backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12",
            isDarkMode 
              ? "bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 border border-zinc-800/50" 
              : "bg-white border border-zinc-200/50"
          )}
        >
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1345314624577!2d-5.552137823657623!3d33.860423627833555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda045e9a3fc0dab%3A0xff9369f02f1ae4e5!2sLaboratoire%20d&#39;analyses%20m%C3%A9dicales%20ALEM!5e0!3m2!1sfr!2sma!4v1747741606594!5m2!1sfr!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du laboratoire"
              className="rounded-lg"
            />
          </div>
        </motion.div>

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
          {submitStatus?.success ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn(
                "p-8 rounded-xl text-center",
                isDarkMode ? "bg-green-900/20" : "bg-green-50"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                isDarkMode ? "bg-green-800" : "bg-green-100"
              )}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={cn(
                "text-xl font-bold mb-2",
                isDarkMode ? "text-gray-100" : "text-gray-800"
              )}>Message envoyé avec succès</h3>
              <p className={cn(
                "mb-6",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}>
                Nous avons bien reçu votre message. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Nouveau message
              </button>
            </motion.div>
          ) : (
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
                  )}>Nom et Prénom</label>
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
              
              {submitStatus?.success === false && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={cn(
                    "p-4 rounded-lg mb-6 text-center",
                    isDarkMode ? "bg-red-900/20 text-red-200" : "bg-red-50 text-red-600"
                  )}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
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
                  disabled={isSubmitting}
                  className={cn(
                    "px-8 py-3 bg-green-600 text-white rounded-lg font-medium transition-colors",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
                  )}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactComponent;
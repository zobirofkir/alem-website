import { motion } from 'framer-motion';
import AboutComponent from '@/components/AboutComponent';
import ContactComponent from '@/components/ContactComponent';
import PortfolioComponent from '@/components/PortfolioComponent';
import SliderComponent from '@/components/SliderComponent';
import sliderData from '@/data/SliderData';
import { containerVariants, fadeInUp } from '@/hooks/useWelcomePage';


const WelcomePage = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInUp}>
        <SliderComponent slides={sliderData} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <AboutComponent />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <PortfolioComponent />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ContactComponent />
      </motion.div>
    </motion.section>
  );
};

export default WelcomePage;

import AboutComponent from '@/components/AboutComponent';
import ContactComponent from '@/components/ContactComponent';
import PortfolioComponent from '@/components/PortfolioComponent';
import SliderComponent from '@/components/SliderComponent';
import sliderData from '@/data/SliderData';

const WelcomePage = () => {
  return (
    <section>
        <SliderComponent slides={sliderData} />

        <AboutComponent  />

        <PortfolioComponent />

        <ContactComponent />
        
    </section>
  )
}

export default WelcomePage
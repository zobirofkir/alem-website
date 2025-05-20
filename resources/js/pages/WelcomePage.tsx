import AboutComponent from '@/components/AboutComponent';
import ContactComponent from '@/components/ContactComponent';
import PortfolioComponent from '@/components/PortfolioComponent';
import SliderComponent from '@/components/SliderComponent'

const WelcomePage = () => {
  
  /**
   * Sample slides data
   */
  const slides = [
    {
      id: 1, 
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080",
      title: "Portfolio Project One",
      description: "Innovative solutions for modern challenges"
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1663032618920-6cc64f857e65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Portfolio Project Two",
      description: "Creative designs with cutting-edge technology"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Portfolio Project Three",
      description: "Transforming ideas into reality"
    }
  ];

  return (
    <section>
        <SliderComponent slides={slides} />

        <AboutComponent  />

        <PortfolioComponent />

        <ContactComponent />
        
    </section>
  )
}

export default WelcomePage
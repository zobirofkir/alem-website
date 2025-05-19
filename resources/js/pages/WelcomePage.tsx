import AboutComponent from '@/components/AboutComponent';
import SliderComponent from '@/components/SliderComponent'
import React from 'react'

const WelcomePage = () => {
  
  /**
   * Sample slides data
   */
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020",
      title: "Portfolio Project One",
      description: "Innovative solutions for modern challenges"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832",
      title: "Portfolio Project Two",
      description: "Creative designs with cutting-edge technology"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
      title: "Portfolio Project Three",
      description: "Transforming ideas into reality"
    }
  ];

  return (
    <section>
        <SliderComponent slides={slides} />

        <AboutComponent  />

        <div>
          Welcome Page
        </div>
    </section>
  )
}

export default WelcomePage
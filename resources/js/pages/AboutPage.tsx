import AboutComponent from '@/components/AboutComponent'
import React from 'react'

const AboutPage = () => {
  return (
    <section className='dark:bg-black bg-white'>
        <div className='flex justify-center items-center lg:h-screen'>
            <AboutComponent />
        </div>
    </section>
  )
}

export default AboutPage
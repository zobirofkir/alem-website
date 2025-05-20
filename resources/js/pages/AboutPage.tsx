import AboutComponent from '@/components/AboutComponent'
import { Head } from '@inertiajs/react'

const AboutPage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='About'/>
        <div className='flex justify-center items-center'>
            <AboutComponent />
        </div>
    </section>
  )
}

export default AboutPage
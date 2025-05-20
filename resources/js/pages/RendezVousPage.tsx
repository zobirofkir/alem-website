import RendezVousComponent from '@/components/RendezVousComponent'
import { Head } from '@inertiajs/react'

const RendezVousPage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='Rendez-vous'/>
        <div className='flex justify-center items-center'>
            <RendezVousComponent />
        </div>
    </section>
  )
}

export default RendezVousPage
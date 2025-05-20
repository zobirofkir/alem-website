import SpecialiteComponent from '@/components/SpecialiteComponent'
import { Head } from '@inertiajs/react'

const SpecialitePage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='Specialite'/>
        <div className='flex justify-center items-center'>
            <SpecialiteComponent />
        </div>
    </section>
  )
}

export default SpecialitePage
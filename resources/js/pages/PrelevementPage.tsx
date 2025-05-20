import PrelevementComponent from '@/components/PrelevementComponent'
import { Head } from '@inertiajs/react'

const PrelevementPage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='Prelevement'/>
        <div className='flex justify-center items-center'>
            <PrelevementComponent />
        </div>
    </section>
  )
}

export default PrelevementPage
import ReproductionComponent from '@/components/ReproductionComponent'
import { Head } from '@inertiajs/react'

const ReproductionPage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='Reproduction'/>
        <div className='flex justify-center items-center'>
            <ReproductionComponent />
        </div>
    </section>
  )
}

export default ReproductionPage
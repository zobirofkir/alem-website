import RadioComponent from '@/components/RadioComponent'
import { Head } from '@inertiajs/react'

const RadioPage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='Radio'/>
        <div className='flex justify-center items-center'>
            <RadioComponent />
        </div>
    </section>
  )
}

export default RadioPage
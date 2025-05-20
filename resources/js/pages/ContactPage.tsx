import ContactComponent from '@/components/ContactComponent'
import { Head } from '@inertiajs/react'

const ContactPage = () => {
  return (
    <section className='dark:bg-black bg-white'>µ
      <Head title='Contact'/>  
        <div className='flex justify-center items-center'>
            <ContactComponent />
        </div>
    </section>
  )
}

export default ContactPage
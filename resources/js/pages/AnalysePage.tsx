import AnalyseComponent from "@/components/AnalyseComponent"
import { Head } from "@inertiajs/react"

const AnalysePage = () => {
  return (
    <section className='dark:bg-black bg-white'>
      <Head title='Analyse'/>
        <div className='flex justify-center items-center'>
            <AnalyseComponent />
        </div>
    </section>
  )
}

export default AnalysePage
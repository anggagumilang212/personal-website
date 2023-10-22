
import Link from 'next/link'
import Image from 'next/image';
import { FiExternalLink as LinkIcon } from 'react-icons/fi'
export default function Projects() {
 
  return (
    <section className="pt-2">
  <div className="container  py-24 mx-auto -mt-24">
    <div className="flex flex-wrap -m-7" data-aos="fade-up">
      <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
        <div className="transition ease-in-out delay-150 h-auto overflow-hidden lg:w-[400px] w-full shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border">
          <Image className="hover:scale-105 transition-all duration-300 cursor-pointer object-cover object-center w-full lg:h-48 md:h-36" src="/project/visitcirebon.png" alt="visit" width={400} height={192} />
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">Visit Cirebon ID</h1>
            <p className="mb-3 leading-relaxed">Visit cirebon adalah website yang bertujuan untuk mengenalkan kota cirebon yang mempunyai banyak kuliner,wisata,oleh-oleh dan lainnya.</p>
            <div className="flex flex-wrap items-center gap-2">
              <Image src="/laravel2.png" alt="tech" width={25} height={25} />
              <Image src="/msql.png" alt="tech" width={25} height={25} />
              <Link href="#" className='flex ml-auto gap-1'>
                <LinkIcon size={22} />
                <h1>Live Demo</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
        <div className="transition ease-in-out delay-150 lg:w-[400px] h-auto overflow-hidden w-full  shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border">
          <Image className="hover:scale-105 transition-all duration-300 object-cover cursor-pointer object-center w-full lg:h-48 md:h-36" src="/project/dispora.jpg" alt="dispora" width={400} height={192} />
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">Dispora Cirebon</h1>
            <p className="mb-3 leading-relaxed">Website dispora cirebon yang bertujuan untuk mengelola sistem pemuda dan olahraga di kabupaten cirebon, semua konten di dalamnya di ataur lewat menejemen admin.</p>
            <div className="flex flex-wrap items-center gap-2">
              <Image src="/laravel2.png" alt="tech" width={25} height={25} />
              <Image src="/msql.png" alt="tech" width={25} height={25} />
              <Link href="#" className='flex ml-auto gap-1'>
                <LinkIcon size={22} />
                <h1>Live Demo</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
        <div className="transition ease-in-out delay-150 lg:w-[400px] h-auto overflow-hidden w-full  shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border">
          <Image className="hover:scale-105 transition-all duration-300 object-cover cursor-pointer object-center w-full lg:h-48 md:h-36" src="/project/Keraton.png" alt="keraton" width={400} height={192} />
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">Smart Keraton Kacirebonan</h1>
            <p className="mb-3 leading-relaxed">Website resmi keraton Kacirebonan, teknologi yang di gunakan css,bootsrap Mysql dan laravel</p>
            <div className="flex flex-wrap items-center gap-2">
              <Image src="/laravel2.png" alt="tech" width={25} height={25} />
              <Image src="/msql.png" alt="tech" width={25} height={25} />
              <Link href="#" className='flex ml-auto gap-1'>
                <LinkIcon size={22} />
                <h1>Live Demo</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
        <div className="transition ease-in-out delay-150 lg:w-[400px] h-auto overflow-hidden w-full  shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border">
          <Image className="hover:scale-105 transition-all duration-300 object-cover cursor-pointer object-center w-full lg:h-48 md:h-36" src="/project/catering.jpg" alt="catering" width={400} height={192} />
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">Cs Catering</h1>
            <p className="mb-3 leading-relaxed">Website yang dapat terima pesanan catering melalui online.</p>
            <div className="flex flex-wrap items-center gap-2">
              <Image src="/laravel2.png" alt="tech" width={25} height={25} />
              <Image src="/msql.png" alt="tech" width={25} height={25} />
              <Link href="#" className='flex ml-auto gap-1'>
                <LinkIcon size={22} />
                <h1>Live Demo</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
    </section>

  )
}

'use client'


import Image from 'next/image';
import { FiExternalLink as LinkIcon } from 'react-icons/fi'
export default function Projects() {
 
  return (
    <section className="pt-2">
  <div className="container  py-24 mx-auto -mt-24">
    <div className="flex flex-wrap -m-7">
      <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
        <div className="transition ease-in-out delay-150 h-auto overflow-hidden lg:w-[400px] w-full shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border-opacity-60" data-aos="fade-up">
          <Image className="hover:scale-105 transition-all duration-300 cursor-pointer object-cover object-center w-full lg:h-48 md:h-36" src="/git dan github.jpg" alt="blog" width={400} height={192} />
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">Laravel vs Codeigniter</h1>
            <p className="mb-3 leading-relaxed">Pada artikel ini akan membahas mengenai framework Laravel dan Codeigniter, dan bagaimana perbandingan dari kedua framework tersebut.</p>
            <div className="flex flex-wrap items-center gap-2">
              <Image src="/laravel2.png" alt="tech" width={25} height={25} />
              <Image src="/msql.png" alt="tech" width={25} height={25} />
              <a href="#" className='flex ml-auto gap-1'>
                <LinkIcon size={22} />
                <h1>Live Demo</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-full sm:w-1/2 lg:w-1/2">
        <div className="transition ease-in-out delay-150 lg:w-[400px] h-auto overflow-hidden w-full  shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border-opacity-60" data-aos="fade-up">
          <Image className="hover:scale-105 transition-all duration-300 object-cover cursor-pointer object-center w-full lg:h-48 md:h-36" src="/git dan github.jpg" alt="blog" width={400} height={192} />
          <div className="p-6">
            <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">Laravel vs Codeigniter</h1>
            <p className="mb-3 leading-relaxed">Pada artikel ini akan membahas mengenai framework Laravel dan Codeigniter, dan bagaimana perbandingan dari kedua framework tersebut.</p>
            <div className="flex flex-wrap items-center gap-2">
              <Image src="/laravel2.png" alt="tech" width={25} height={25} />
              <Image src="/msql.png" alt="tech" width={25} height={25} />
              <a href="#" className='flex ml-auto gap-1'>
                <LinkIcon size={22} />
                <h1>Live Demo</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>

  )
}

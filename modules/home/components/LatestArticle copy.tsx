
import { HiOutlineNewspaper } from 'react-icons/hi'
import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink as LinkIcon } from 'react-icons/fi'
export default function LatestArticle() {
 
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading title="Latest Project" icon={<HiOutlineNewspaper className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">Latest portfolio project.</p>
        </SectionSubHeading>
      </div>
      <div className="flex flex-row h-40 overflow-y-hidden space-x-3 mt-6 overflow-x-scroll no-scrollbar">
      <div
      
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
        src="/project/visitcirebon.png" 
        alt="visit"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className="text-sm text-neutral-800 dark:text-neutral-300">Visit Cirebon</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/tech/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/tech/msql.png" alt="tech" width={12} height={12} />
              <Image src="/tech/html.png" alt="tech" width={12} height={12} />
              <Image src="/tech/bootsrap.png" alt="tech" width={12} height={12} />
              <Image src="/tech/css.png" alt="tech" width={12} height={12} />
              <Image src="/tech/js.png" alt="tech" width={12} height={12} />
              <Link href={"https://www.visitcirebon.id/layanan-produk"} target='_blank' className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </Link>
            </div>
    </div>
      <div
     
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src="/project/dispora.jpg"
          alt="image dispora"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className="text-sm text-neutral-800 dark:text-neutral-300">Dispora</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/tech/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/tech/msql.png" alt="tech" width={12} height={12} />
              <Image src="/tech/html.png" alt="tech" width={12} height={12} />
              <Image src="/tech/bootsrap.png" alt="tech" width={12} height={12} />
              <Image src="/tech/css.png" alt="tech" width={12} height={12} />
              <Image src="/tech/js.png" alt="tech" width={12} height={12} />
              <Link href={"https://diasporacirebonkab.online"} target='_blank' className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </Link>
            </div>
    </div>
      <div
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
         src="/project/Keraton.png"
         alt="keraton"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">Smart Keraton</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/tech/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/tech/msql.png" alt="tech" width={12} height={12} />
              <Image src="/tech/html.png" alt="tech" width={12} height={12} />
              <Image src="/tech/bootsrap.png" alt="tech" width={12} height={12} />
              <Image src="/tech/css.png" alt="tech" width={12} height={12} />
              <Image src="/tech/js.png" alt="tech" width={12} height={12} />
              <Link href={'https://smartkeraton.online/beritaBudaya'} target='_blank' className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </Link>
            </div>
    </div>
      <div
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src="/project/catering.jpg"
          alt="catering"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">Cs Catering</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/tech/tailwind.png" alt="tech" width={12} height={12} />
              <Image src="/tech/html.png" alt="tech" width={12} height={12} />
              <Image src="/tech/js.png" alt="tech" width={12} height={12} />
              <Link href={'https://cscatering.vercel.app'} target='_blank' className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </Link>
            </div>
    </div>
      </div>
    </section>
  )
}


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
          <p className="dark:text-neutral-400">Latest portfolio project..</p>
        </SectionSubHeading>
      </div>
      <div className="flex flex-row h-40 overflow-y-hidden space-x-3 mt-6 overflow-x-scroll no-scrollbar">
      <Link
      href="#"
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
        src="/visitcirebon.png" 
        alt="visit"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className="text-sm text-neutral-800 dark:text-neutral-300">yyyyyy</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/msql.png" alt="tech" width={12} height={12} />
              <div className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </div>
            </div>
    </Link>
      <Link
      href="#"
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src="/git dan github.jpg"
          alt="image project"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">yyyyyy</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/msql.png" alt="tech" width={12} height={12} />
              <div className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </div>
            </div>
    </Link>
      <Link
      href="#"
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src="/git dan github.jpg"
          alt="image project"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">yyyyyy</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/msql.png" alt="tech" width={12} height={12} />
              <div className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </div>
            </div>
    </Link>
      <Link
      href="#"
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500">
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src="/git dan github.jpg"
          alt="image project"
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">yyyyyy</p>
      <div className="flex flex-wrap items-center gap-1">
              <Image src="/laravel2.png" alt="tech" width={12} height={12} />
              <Image src="/msql.png" alt="tech" width={12} height={12} />
              <div className='flex ml-auto gap-1'>
                <LinkIcon size={10} />
                <h1 className='text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400'>Live Demo</h1>
              </div>
            </div>
    </Link>
      </div>
    </section>
  )
}

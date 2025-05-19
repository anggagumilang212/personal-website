'use client'

import { useEffect, useState } from 'react'
import { HiOutlineNewspaper } from 'react-icons/hi'
import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink as LinkIcon } from 'react-icons/fi'

export default function LatestArticle() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://api.anggagumilang.my.id/api/projects') // Sesuaikan dengan base URL-mu
        const data = await res.json()
        setProjects(data.data)
      } catch (error) {
        console.error('Gagal mengambil data proyek:', error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section>
      <div className="space-y-2">
        <SectionHeading title="Latest Project" icon={<HiOutlineNewspaper className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">Latest portfolio project.</p>
        </SectionSubHeading>
      </div>
      <div className="flex flex-row h-40 overflow-y-hidden space-x-3 mt-6 overflow-x-scroll no-scrollbar">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500"
          >
            <div className="w-full h-28 overflow-hidden rounded-md">
              <Image
                src={project.image_url}
                alt={project.judul}
                width={200}
                height={200}
                className="rounded-md w-full h-full object-cover"
                priority
              />
            </div>
            <p className="text-sm text-neutral-800 dark:text-neutral-300">{project.judul}</p>
            <div className="flex flex-wrap items-center gap-1">
              {project.tech.map((techImage: string, i: number) => (
                <Image key={i} src={techImage} alt="tech" width={12} height={12} />
              ))}
              {project.url && (
                <Link href={project.url} target="_blank" className="flex ml-auto gap-1">
                  <LinkIcon size={10} />
                  <h1 className="text-[10px] -mt-[1px] text-neutral-600 dark:text-neutral-400">
                    Live Demo
                  </h1>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

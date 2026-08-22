'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
import clsx from 'clsx';
import { useProjectView } from '@/stores/project-view';
import useIsMobile from '@/hooks/useIsMobile';
import ProjectListHeader from './ProjectListHeader';
interface Project {
  id: number
  judul: string
  deskripsi: string
  url: string
  image_url: string
  tech: string[]
}
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { viewOption, setViewOption } = useProjectView();
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://api.anggagumilang.my.id/api/projects'); // Ganti sesuai API Laravel kamu
        const data = await res.json();
        setProjects(data.data);
      } catch (error) {
        console.error('Gagal mengambil data proyek:', error);
      }
    };

    fetchProjects();
  }, []);


  return (
    <section className="pt-2">
      <div className="container py-24 mx-auto -mt-24">
        {!isMobile && <ProjectListHeader viewOption={viewOption} setViewOption={setViewOption} />}
        <div 
          className={clsx(
            'gap-5 sm:gap-4',
            viewOption === 'list' || isMobile ? 'flex flex-col' : 'grid grid-cols-1 sm:grid-cols-2 sm:!gap-5'
          )} 
          data-aos="fade-up"
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <div 
                className={clsx(
                  "flex transition ease-in-out delay-150 h-auto overflow-hidden w-full shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-800",
                  viewOption === 'grid' || isMobile ? 'flex-col' : 'flex-row'
                )}
              >
                <div className={clsx(
                  viewOption === 'grid' || isMobile ? 'w-full' : 'w-[40%]'
                )}>
                  <Image
                    className={clsx(
                      "hover:scale-105 transition-all duration-300 object-cover cursor-pointer object-center w-full",
                      viewOption === 'grid' || isMobile ? "lg:h-48 md:h-36" : "h-full min-h-[200px]"
                    )}
                    src={project.image_url}
                    alt={project.judul}
                    width={400}
                    height={192}
                  />
                </div>
                <div className={clsx(
                  "p-6 flex flex-col justify-center",
                  viewOption === 'grid' || isMobile ? 'w-full' : 'w-[60%]'
                )}>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">
                    {project.judul}
                  </h1>
                  <p className="mb-3 leading-relaxed">{project.deskripsi}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-auto pt-4">
                    {project.tech.map((techImage: string, i: number) => (
                      <Image key={i} src={techImage} alt="tech" width={25} height={25} />
                    ))}
                    <Link href={project.url} target="_blank" className="flex ml-auto gap-1">
                      <LinkIcon size={22} />
                      <h1>Live Demo</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

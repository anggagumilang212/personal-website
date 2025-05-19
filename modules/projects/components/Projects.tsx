'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';
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
        <div className="flex flex-wrap -m-7" data-aos="fade-up">
          {projects.map((project, index) => (
            <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/2">
              <div className="transition ease-in-out delay-150 lg:w-[400px] h-auto overflow-hidden w-full shadow-sm lg:hover:shadow-md dark:lg:hover:shadow-xl bg-white rounded-xl dark:bg-neutral-800 border">
                <Image
                  className="hover:scale-105 transition-all duration-300 object-cover cursor-pointer object-center w-full lg:h-48 md:h-36"
                  src={project.image_url}
                  alt={project.judul}
                  width={400}
                  height={192}
                />
                <div className="p-6">
                  <h1 className="mb-3 text-lg font-medium text-gray-900 dark:text-white title-font">
                    {project.judul}
                  </h1>
                  <p className="mb-3 leading-relaxed">{project.deskripsi}</p>
                  <div className="flex flex-wrap items-center gap-2">
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

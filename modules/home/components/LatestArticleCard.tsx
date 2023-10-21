import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogItem } from '@/common/types/blog'

interface LatestArticleCardProps {
  data: BlogItem
}

export default function LatestArticleCard({ data }: LatestArticleCardProps) {

  return (
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
      <span className=" text-[10px] text-neutral-600 dark:text-neutral-400">
       202020
      </span>
     
    </Link>
   
  );
}

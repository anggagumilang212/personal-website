import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { BsBuildings as CompanyIcon } from 'react-icons/bs'

import Card from '@/common/components/elements/Card'
import Image from '@/common/components/elements/Image'
import { CareerProps } from '@/common/types/careers'

export default function CareerCard({ position, company, logo, location, start_date, end_date, link }: CareerProps) {
  const startDate = new Date(start_date)
  const isPresent = end_date === 'Present' || !end_date
  const endDate = isPresent ? new Date() : new Date(end_date as string)

  const totalMonths = differenceInMonths(endDate, startDate) + 1
  const durationYears = Math.floor(totalMonths / 12)
  const durationMonths = totalMonths % 12

  let durationText = ''
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? 's' : ''} `
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? 's' : ''}`
  }

  return (
    <Card className="flex items-center gap-5 py-4 px-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800">
      {logo ? <Image src={logo} width={55} height={55} alt={company} /> : <CompanyIcon size={30} />}

      <div className="space-y-1">
        <h2>{position}</h2>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
          <div className="flex items-center gap-1 md:gap-2">
            <a href={link || '#'} target="_blank" data-umami-event={`Click Career Company Name: ${company}`}>
              <span className="underline cursor-pointer hover:text-dark hover:dark:text-white">{company}</span>
            </a>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{location}</span>
          </div>
          <div className="flex flex-col md:text-[13px]">
            <div className="flex gap-1">
              <span>{format(startDate, 'MMM yyyy')}</span> -{' '}
              <span>{isPresent ? 'Present' : format(endDate, 'MMM yyyy')}</span>
            </div>
            <span className="text-neutral-500 dark:text-neutral-500">~ {durationText}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

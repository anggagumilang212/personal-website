import { format, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5)

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  if (!date) return ''
  try {
    const formattedDate = format(utcToZonedTime(parseISO(date), 'Asia/Jakarta'), type)
    return formattedDate
  } catch (error) {
    return ''
  }
}

export const formatImageUrl = (url: string | null) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  // Assuming Laravel stores images in storage/app/public and they are accessible via /storage/
  return `https://api.anggagumilang.my.id/storage/${url}`
}

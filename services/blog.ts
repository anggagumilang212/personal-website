import axios from 'axios'

import { BLOG_API, DEVTO_BLOG_API } from '@/common/constant'
import { BlogDetailProps, BlogItem, CommentItemProps } from '@/common/types/blog'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function getBlogData(): Promise<BlogItem[]> {
  const response = await axios.get(DEVTO_BLOG_API)
  if (response?.status !== 200) return {} as BlogItem[]
  return response.data
}

export async function getBlogDetail({ params, searchParams }: Props): Promise<BlogDetailProps> {
  const URL = `${BLOG_API}/${params.slug}`
  try {
    const response = await axios.get(URL)
    const data = response.data?.data || response.data
    if (!data.user) {
      data.user = {
        name: 'Angga Gumilang',
        username: 'anggagumilang212',
        profile_image: 'https://res.cloudinary.com/dnlrqdzbv/image/upload/c_crop,ar_1:1/v1770018519/me2_yaijiu.png'
      }
    }
    return data
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The requested blog post could not be found.',
      cover_image: '',
      slug: params.slug,
      user: { name: 'Angga Gumilang' }
    } as BlogDetailProps
  }
}

export async function getComments(postId: string): Promise<CommentItemProps[]> {
  // Mock comments until a local comment system is implemented
  return []
}

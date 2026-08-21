import axios from 'axios'

import { BLOG_API, DEVTO_BLOG_API } from '@/common/constant'
import { BlogDetailProps, BlogItem, CommentItemProps } from '@/common/types/blog'

type Props = {
  params: { content: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function getBlogData(): Promise<BlogItem[]> {
  const response = await axios.get(DEVTO_BLOG_API)
  if (response?.status !== 200) return {} as BlogItem[]
  return response.data
}

export async function getBlogDetail({ searchParams }: Props): Promise<BlogDetailProps> {
  const URL = `${BLOG_API}/${searchParams.id}`
  const response = await axios.get(URL)
  if (response.status !== 200) return {} as BlogDetailProps
  return response.data
}

export async function getComments(postId: string): Promise<CommentItemProps[]> {
  // Mock comments until a local comment system is implemented
  return []
}

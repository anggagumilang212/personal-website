import { Metadata } from 'next'

import { getBlogDetail, getComments } from '@/services/blog'
import { PLACEHOLDER_URL } from '@/common/constant'

import BackButton from '@/common/components/elements/BackButton'
import Container from '@/common/components/elements/Container'
import ReaderPage from '@/common/components/elements/ReaderPage'
import { METADATA } from '@/common/constant/metadata'
import { formatImageUrl } from '@/common/helpers'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const blog = await getBlogDetail({ params, searchParams })
  const url = `${process.env.DOMAIN}/blog/${blog.slug}`
  const imageUrl = formatImageUrl(blog.cover_image) || PLACEHOLDER_URL
  const title = `${blog.title} ${METADATA.exTitle}`

  return {
    title: title,
    description: blog.description,
    openGraph: {
      title: title,
      description: blog.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title
        }
      ],
      url: url,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: blog.user.name
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: blog.description,
      images: [imageUrl]
    },
    keywords: blog.title,
    alternates: {
      canonical: url
    }
  }
}

export default async function BlogDetailPage({ params, searchParams }: Props) {
  const blog = await getBlogDetail({ params, searchParams })
  const comments = await getComments(searchParams.id as string)
  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/blog" />
        <ReaderPage content={blog} pageViewCount={blog.page_views_count || 0} comments={comments} />
      </Container>
    </>
  )
}

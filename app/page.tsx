import { Metadata } from 'next'

import Container from '@/common/components/elements/Container'
import { METADATA } from '@/common/constant/metadata'

import Home from '@/modules/home'

export const metadata: Metadata = {
  title: `${METADATA.creator} | Software Engineer, Mobile and Web Development`,
  alternates: {
    canonical: process.env.DOMAIN
  }
}

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
        <Home />
      </Container>
    </>
  )
}

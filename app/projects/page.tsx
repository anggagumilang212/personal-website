
import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'

import Projects from '@/modules/projects'


const PAGE_TITLE = 'Portfolio Projects'
const PAGE_DESCRIPTION = 'Projects that I have worked on with the team, whether as frontend, backend or full stack.'

export default async function ProjectsPage() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects/>
      </Container>
    </>
  )
}


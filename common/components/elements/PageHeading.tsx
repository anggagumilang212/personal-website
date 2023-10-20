interface PageHeadingProps {
  title: string 
  description?: string
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <>
      <h1 className="text-2xl font-medium font-sora">Portofolio Project</h1>
      <p className="mb-6 border-b border-dashed border-neutral-600 pt-2 pb-6 text-neutral-600 dark:text-neutral-400">
      Projects that I have worked on with the team, whether as frontend, backend or full stack.
      </p>
    </>
  )
}

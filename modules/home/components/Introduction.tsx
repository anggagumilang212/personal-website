
export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m Angga</h1> <div className="ml-1 animate-waving-hand">👋</div>
        </div>
      
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Software Engineer</li>
          <li>
            Based in Cirebon <span className="ml-1">Indonesia 🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
        a full stack developer with a passion for creating modern,
                    dynamic and static websites, creating technological
                    solutions that are innovative and useful for many people.
        </p>
      </div>
    </section>
  )
}

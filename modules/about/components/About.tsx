import Breakline from '@/common/components/elements/Breakline'

import Summary from './Summary'
import SkillList from '@/modules/home/components/SkillList'

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline />
      <SkillList/>
    </section>
  )
}

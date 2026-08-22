import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ProjectViewState {
  viewOption: string
}
interface ProjectViewAction {
  setViewOption: (option: string) => void
}

export const useProjectView = create<ProjectViewState & ProjectViewAction>()(
  devtools(
    persist(
      set => ({
        viewOption: 'grid',
        setViewOption: option => set(() => ({ viewOption: option }))
      }),
      {
        name: 'project-view'
      }
    )
  )
)

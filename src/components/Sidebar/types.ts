export interface SidebarDataProps {
  id: number
  label: string
  icon: JSX.Element
  payload: string
}

export interface ComponentProps {
  data: SidebarDataProps[]
  handleActiveTab: (name: any) => void
}

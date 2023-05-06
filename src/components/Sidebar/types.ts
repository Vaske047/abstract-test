export interface SidebarDataProps {
  id: number
  label: string
  icon: JSX.Element
  payload: string
}

export interface SidebarItemProps {
  isActive: boolean
}

export interface ComponentProps {
  data: SidebarDataProps[]
  handleActiveTab: (name: any) => void
  activeTab: string
}

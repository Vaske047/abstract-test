import { StyledSidebar, StyledItem } from './style'
import { ComponentProps } from './types'

const Sidebar = ({ data, handleActiveTab, activeTab }: ComponentProps) => {
  const handleClick = (name: string) => {
    handleActiveTab(name)
  }
  return (
    <StyledSidebar data-testid='sidebar'>
      {data.map((topic) => (
        <StyledItem
          key={topic.id}
          onClick={() => handleClick(topic.payload)}
          isActive={activeTab === topic.payload}
        >
          {topic.icon}
          {topic.label}
        </StyledItem>
      ))}
    </StyledSidebar>
  )
}

export default Sidebar

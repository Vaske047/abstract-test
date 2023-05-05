import { StyledSidebar, StyledItem } from './style'
import { ComponentProps } from './types'

const Sidebar = ({ data }: ComponentProps) => {
  return (
    <StyledSidebar>
      {data.map((topic) => (
        <StyledItem key={topic.id}>
          {topic.icon}
          {topic.label}
        </StyledItem>
      ))}
    </StyledSidebar>
  )
}

export default Sidebar

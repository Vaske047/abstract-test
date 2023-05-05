import { StyledList, StyledListHeader, StyledHeaderItem } from './style'
import { ComponentProps } from './types'

import RepositoryListRow from './RepositoryListRow'

const RepositoryList = ({ data }: ComponentProps) => {
  return (
    <StyledList>
      <StyledListHeader>
        <StyledHeaderItem>Repository name</StyledHeaderItem>
        <StyledHeaderItem>Numbers of stars</StyledHeaderItem>
        <StyledHeaderItem>Numbers of forks</StyledHeaderItem>
        <StyledHeaderItem>Owner</StyledHeaderItem>
      </StyledListHeader>
      {data?.map((repo) => (
        <RepositoryListRow rowData={repo} key={repo.id} />
      ))}
    </StyledList>
  )
}

export default RepositoryList

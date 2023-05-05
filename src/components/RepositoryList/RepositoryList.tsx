import {
  StyledListWrapper,
  StyleListItemsWrapper,
  StyledList,
  StyledListHeader,
  StyledHeaderItem
} from './style'
import { ComponentProps } from './types'

import RepositoryListRow from './RepositoryListRow'

import Pagination from '../Pagination'

const RepositoryList = ({
  data,
  headerLabels,
  pageData,
  handlePageChange
}: ComponentProps) => {
  const handleChange = (pageNumber: number) => {
    handlePageChange(pageNumber)
  }
  return (
    <StyledListWrapper>
      <StyledList>
        <StyledListHeader>
          {headerLabels.map((column) => (
            <StyledHeaderItem key={column.id}>{column.label}</StyledHeaderItem>
          ))}
        </StyledListHeader>
        <StyleListItemsWrapper>
          {data?.map((repo) => (
            <RepositoryListRow rowData={repo} key={repo.id} />
          ))}
        </StyleListItemsWrapper>
      </StyledList>
      <Pagination onChange={handleChange} pageData={pageData} />
    </StyledListWrapper>
  )
}

export default RepositoryList

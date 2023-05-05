import {
  StyledListWrapper,
  StyleListItemsWrapper,
  StyledList,
  StyledListHeader,
  StyledHeaderItem,
  StyledListNav
} from './style'
import { ComponentProps } from './types'

import RepositoryListRow from './RepositoryListRow'

import Pagination from '../Pagination'
import DropdownSelect from '../DropdownSelect'

const RepositoryList = ({
  data,
  headerLabels,
  pageData,
  handlePageChange,
  handlePerPage,
  handleSort
}: ComponentProps) => {
  const handleChange = (pageNumber: number) => {
    handlePageChange(pageNumber)
  }

  const handlePerPageChange = (perPage: number) => {
    handlePerPage(perPage)
  }
  const handleSortChange = (sort: string) => {
    handleSort(sort)
  }
  const perPageOptions = [5, 10, 15, 20]
  const sortOptions = ['stars desc', 'stars asc', 'forks desc', 'forks asc']
  return (
    <StyledListWrapper>
      <StyledListNav>
        <DropdownSelect
          label='Per page'
          dataType='number'
          options={perPageOptions}
          preselected={pageData.perPage}
          handleValueChange={handlePerPageChange}
        />
        <DropdownSelect
          label='Sort by'
          dataType='string'
          options={sortOptions}
          preselected={pageData.sortAndOrder}
          handleValueChange={handleSortChange}
        />
      </StyledListNav>
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

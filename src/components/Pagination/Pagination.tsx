import { useState } from 'react'
import {
  StyledPagination,
  StyledPagesList,
  StyledPageItem,
  StyledButton
} from './style'
import { ComponentProps } from './types'
import ArrowLeft from '../../icons/ArrowLeft'
import ArrowRight from '../../icons/ArrowRight'
import DoubleArrowLeft from '../../icons/DoubleArrowLeft'
import DoubleArrowRight from '../../icons/DoubleArrowRight'

const Pagination = ({
  pageData,
  onChange,
  cyLabel,
  ...props
}: ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(pageData.currentPage)
  const pageRange = 2
  const rangeStart = () => {
    let rangeStartValue = pageData.currentPage - pageRange
    if (rangeStartValue <= 1) {
      rangeStartValue = 1
    }
    return rangeStartValue
  }

  const rangeEnd = () => {
    let rangeEndValue = pageData.currentPage + pageRange
    if (rangeEndValue > pageData.totalPages) {
      return (rangeEndValue = pageData.totalPages)
    }
    if (rangeStart() <= 1) {
      return Math.min(pageRange * 2 + 1, pageData.totalPages)
    }
    return rangeEndValue
  }

  const pageLinks = () => {
    if (!rangeStart || !rangeEnd) {
      return
    }
    return Array(rangeEnd() - rangeStart() + 1)
      .fill(0)
      .map((e, i) => rangeStart() + i)
  }

  const onNextClick = () => {
    if (currentPage >= pageData.totalPages) {
      return
    }
    setCurrentPage(currentPage + 1)
    onChange(currentPage + 1)
  }
  const onPreviousClick = () => {
    if (currentPage <= 1) {
      return
    }
    setCurrentPage(currentPage - 1)
    onChange(currentPage - 1)
  }

  const handlePageClick = (pageNumber: number) => () => {
    setCurrentPage(pageNumber)
    onChange(pageNumber)
  }

  return (
    <StyledPagination data-cy={cyLabel} {...props}>
      <StyledButton onClick={handlePageClick(1)} aria-label='first'>
        <DoubleArrowLeft />
      </StyledButton>
      <StyledButton onClick={onPreviousClick} aria-label='prev'>
        <ArrowLeft />
      </StyledButton>
      <StyledPagesList>
        {pageLinks()?.map((page) => {
          return (
            <StyledPageItem
              key={page}
              onClick={handlePageClick(page)}
              data-cy={`pagination-page-${page}`}
              aria-label={`page-${page}`}
              active={page === currentPage}
              role='button'
            >
              {page}
            </StyledPageItem>
          )
        })}
      </StyledPagesList>
      <StyledButton onClick={onNextClick} aria-label='next'>
        <ArrowRight />
      </StyledButton>
      <StyledButton
        onClick={handlePageClick(pageData.totalPages)}
        aria-label='last'
      >
        <DoubleArrowRight />
      </StyledButton>
    </StyledPagination>
  )
}

export default Pagination

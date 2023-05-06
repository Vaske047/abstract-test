import styled, { css } from 'styled-components'
import { PaginationProps } from './types'

export const StyledPagination = styled.div<PaginationProps>`
  display: flex;
  justify-content: center;
  gap: 4px;
`

export const StyledPagesList = styled.div<PaginationProps>`
  display: flex;
  gap: 4px;
`

export const StyledPageItem = styled.div<PaginationProps>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 13px;
  &:hover {
    background-color: #081159;
    color: #fff;
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: #081159;
      color: #fff;
      &:hover {
        background-color: #081159;
        color: #fff;
      }
    `}
`
export const StyledButton = styled.button`
  background-color: #f1f1f1;
  min-width: 35px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  path {
    fill: #081159;
  }
`

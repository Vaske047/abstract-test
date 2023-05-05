export interface PageDataProps {
  currentPage: number
  perPage: number
  total: number
  totalPages: number
}
export interface PaginationProps {
  cyLabel?: string
  active?: boolean
}

export interface ComponentProps extends PaginationProps {
  role?: string
  pageData: PageDataProps
  onChange: (page: number) => void
}

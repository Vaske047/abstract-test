export interface ParamsProps {
  query: string
  sort: string
  order: string
  perPage: number
  page: number
}

export interface PageDataProps {
  currentPage: number
  perPage: number
  sortAndOrder: string
  total: number
  totalPages: number
}

export interface OwnerProps {
  [key: string]: string
}

export interface ListDataProps {
  id: number
  name: string
  stargazers_count: number
  forks_count: number
  owner: OwnerProps
}

export interface ListRowProps {
  rowData: {
    id: number
    name: string
    stargazers_count: number
    forks_count: number
    owner: OwnerProps
  }
}

export interface ComponentProps {
  data: ListDataProps[]
  headerLabels: { id: number; label: string }[]
  handlePageChange: (page: number) => void
  pageData: {
    count: number
    currentPage: number
    perPage: number
    total: number
    totalPages: number
  }
}

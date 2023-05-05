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
}

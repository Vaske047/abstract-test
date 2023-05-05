import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import { StyledMainLayout, StyledSpinner } from './style'

import { ParamsProps } from './types'

import Sidebar from '../Sidebar'
import RepositoryList from '../RepositoryList'

import LoadingSpinner from '../../icons/LoadingSpinner'

import { sidebarData, headerLabels } from './options'

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState<string>('react')
  const [params, setParams] = useState<ParamsProps>({
    query: 'react',
    sort: '',
    order: '',
    perPage: 10,
    page: 1
  })
  const [doFetchRepositories, isLoadingRepositories, loadingRepositoriesError] =
    useThunk(fetchRepositories)

  const { data } = useSelector((state: any) => {
    return state.repositories
  })

  useEffect(() => {
    setParams({ ...params, query: activeTab })
  }, [activeTab])

  useEffect(() => {
    if (typeof doFetchRepositories === 'function') doFetchRepositories(params)
  }, [doFetchRepositories, params])

  const pageData = {
    currentPage: params?.page || 1,
    perPage: params?.perPage || 10,
    sortAndOrder: `${params?.sort} ${params?.order}`,
    // ztotal: data.total_count > 1000 ? 1000 : data.total_count,
    // totalPages:
    //   data.total_count > 1000
    //     ? 100 / params?.perPage
    //     : data.total_count / params?.perPage
    total: 1000,
    totalPages: 100
  }

  const handleActiveTab = (name: string) => {
    setActiveTab(name)
  }

  const handlePageChange = (page: number) => {
    setParams({ ...params, page })
  }

  const handlePerPage = (perPage: number) => {
    setParams({ ...params, perPage })
  }

  const handleSort = (sort: string) => {
    const sortArr = sort.split(' ')
    setParams({ ...params, sort: sortArr[0], order: sortArr[1] })
  }

  return (
    <StyledMainLayout>
      <Sidebar data={sidebarData} handleActiveTab={handleActiveTab} />
      {isLoadingRepositories ? (
        <StyledSpinner>
          <LoadingSpinner />
        </StyledSpinner>
      ) : (
        <RepositoryList
          data={data?.items}
          headerLabels={headerLabels}
          handlePageChange={handlePageChange}
          pageData={pageData}
          handlePerPage={handlePerPage}
          handleSort={handleSort}
        />
      )}
    </StyledMainLayout>
  )
}

export default MainLayout

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import { StyledMainLayout, StyledSpinner, StyledError } from './style'

import { PageDataProps, ParamsProps } from './types'

import Sidebar from '../Sidebar'
import RepositoryList from '../RepositoryList'

import LoadingSpinner from '../../icons/LoadingSpinner'

import { sidebarData, headerLabels } from './options'

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState<string>('react')
  const [params, setParams] = useState<ParamsProps>({
    query: '',
    sort: '',
    order: '',
    perPage: 10,
    page: 1
  })

  const [pageData, setPageData] = useState<PageDataProps>({
    currentPage: 1,
    perPage: 10,
    sortAndOrder: 'stars desc',
    total: 1000,
    totalPages: 100
  })
  const [doFetchRepositories, isLoadingRepositories, isRepositoriesError] =
    useThunk(fetchRepositories)

  const { data } = useSelector((state: any) => {
    return state.repositories
  })

  useEffect(() => {
    setParams({ ...params, query: activeTab })
  }, [activeTab])

  useEffect(() => {
    if (!params?.query) {
      setParams({ ...params, query: 'react' })
    }
    if (typeof doFetchRepositories === 'function' && params?.query)
      doFetchRepositories(params)
  }, [doFetchRepositories, params])

  useEffect(() => {
    const totalCount = data?.total_count > 1000 ? 1000 : data?.total_count
    if (!totalCount) {
      return
    }
    setPageData({
      ...pageData,
      total: data?.total_count > 1000 ? 1000 : data?.total_count,
      totalPages: totalCount / params?.perPage
    })
  }, [doFetchRepositories])

  const handleActiveTab = (name: string) => {
    setActiveTab(name)
  }

  const handlePageChange = (page: number) => {
    setParams({ ...params, page })
    setPageData({ ...pageData, currentPage: page })
  }

  const handlePerPage = (perPage: number) => {
    setParams({ ...params, perPage })
    setPageData({ ...pageData, perPage })
  }

  const handleSort = (sort: string) => {
    const sortArr = sort.split(' ')
    setParams({ ...params, sort: sortArr[0], order: sortArr[1] })
    setPageData({ ...pageData, sortAndOrder: sortArr.join(' ') })
  }

  return (
    <StyledMainLayout>
      <Sidebar
        data={sidebarData}
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
      />
      {isLoadingRepositories ? (
        <StyledSpinner>
          <LoadingSpinner />
        </StyledSpinner>
      ) : isRepositoriesError ? (
        <StyledError>Loading Error</StyledError>
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

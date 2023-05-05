import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import { StyledMainLayout, StyledSpinner } from './style'

import { ParamsProps } from './types'

import Sidebar from '../Sidebar'
import RepositoryList from '../RepositoryList'

import React from '../../icons/React'
import Vue from '../../icons/Vue'
import Angular from '../../icons/Angular'
import LoadingSpinner from '../../icons/LoadingSpinner'

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

  const sidebarData = [
    {
      id: 1,
      label: 'React',
      icon: <React />,
      payload: 'react'
    },
    {
      id: 2,
      label: 'Vue',
      icon: <Vue />,
      payload: 'vue'
    },
    {
      id: 3,
      label: 'Angular',
      icon: <Angular />,
      payload: 'angular'
    }
  ]

  const headerLabels = [
    {
      id: 1,
      label: 'Repository Name'
    },
    {
      id: 2,
      label: 'Numbers of stars'
    },
    {
      id: 3,
      label: 'Numbers of forks'
    },
    {
      id: 4,
      label: 'Owner'
    }
  ]

  const pageData = {
    count: 15,
    currentPage: params?.page || 1,
    perPage: 10,
    total: 1000,
    totalPages: 100
  }

  const handleActiveTab = (name: string) => {
    setActiveTab(name)
  }

  const handlePageChange = (page: number) => {
    if (!params) return
    setParams({ ...params, page })
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
        />
      )}
    </StyledMainLayout>
  )
}

export default MainLayout

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import { StyledMainLayout, StyledSpinner } from './style'

import Sidebar from '../Sidebar'
import RepositoryList from '../RepositoryList'

import React from '../../icons/React'
import Vue from '../../icons/Vue'
import Angular from '../../icons/Angular'
import LoadingSpinner from '../../icons/LoadingSpinner'

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState<string>('react')
  const [doFetchRepositories, isLoadingRepositories, loadingRepositoriesError] =
    useThunk(fetchRepositories)

  const { data } = useSelector((state: any) => {
    return state.repositories
  })

  useEffect(() => {
    if (typeof doFetchRepositories === 'function')
      doFetchRepositories({ query: activeTab })
  }, [doFetchRepositories, activeTab])

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

  const handleActiveTab = (name: string) => {
    setActiveTab(name)
  }

  return (
    <StyledMainLayout>
      <Sidebar data={sidebarData} handleActiveTab={handleActiveTab} />
      {isLoadingRepositories ? (
        <StyledSpinner>
          <LoadingSpinner />
        </StyledSpinner>
      ) : (
        <RepositoryList data={data?.items} />
      )}
    </StyledMainLayout>
  )
}

export default MainLayout

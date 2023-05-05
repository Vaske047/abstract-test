import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { fetchRepositories } from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import { StyledMainLayout } from './style'

import Sidebar from '../Sidebar'

import React from '../../icons/React'
import Vue from '../../icons/Vue'
import Angular from '../../icons/Angular'

const MainLayout = () => {
  const [doFetchRepositories, isLoadingRepositories, loadingRepositoriesError] =
    useThunk(fetchRepositories)

  const { data } = useSelector((state: any) => {
    return state.repositories
  })

  useEffect(() => {
    if (typeof doFetchRepositories === 'function') doFetchRepositories()
  }, [doFetchRepositories])

  useEffect(() => {
    console.log('data =>', data)
  }, [data])

  const sidebarData = [
    {
      id: 1,
      label: 'React',
      icon: <React />
    },
    {
      id: 2,
      label: 'Vue',
      icon: <Vue />
    },
    {
      id: 3,
      label: 'Angular',
      icon: <Angular />
    }
  ]
  return (
    <StyledMainLayout>
      <Sidebar data={sidebarData} />
      <div>Table</div>
    </StyledMainLayout>
  )
}

export default MainLayout

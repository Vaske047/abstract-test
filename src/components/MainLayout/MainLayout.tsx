import { StyledMainLayout } from './style'

import Sidebar from '../Sidebar'

import React from '../../icons/React'
import Vue from '../../icons/Vue'
import Angular from '../../icons/Angular'

const MainLayout = () => {
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

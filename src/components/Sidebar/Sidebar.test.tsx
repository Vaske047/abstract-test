/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react'
import Sidebar from './Sidebar'
import React from '../../icons/React'
import Vue from '../../icons/Vue'
import Angular from '../../icons/Angular'

describe('Sidebar component', () => {
  const data = [
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
  const handleActiveTab = jest.fn()
  const activeTab = 'react'

  it('renders correctly', () => {
    const { getByTestId } = render(
      <Sidebar
        data={data}
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
      />
    )
    const sidebar = getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  it('handles item click', () => {
    const { getByText } = render(
      <Sidebar
        data={data}
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
      />
    )
    const topic2Item = getByText('Vue')
    fireEvent.click(topic2Item)
    expect(handleActiveTab).toHaveBeenCalledTimes(1)
    expect(handleActiveTab).toHaveBeenCalledWith('vue')
  })
})

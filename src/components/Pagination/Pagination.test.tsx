/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Pagination from './index'

const pageData = {
  count: 15,
  currentPage: 1,
  perPage: 15,
  total: 125,
  totalPages: 9
}

describe('Pagination', () => {
  let onChange: () => void
  beforeEach(() => {
    onChange = jest.fn()
  })
  it('renders', () => {
    const { container } = render(
      <Pagination onChange={onChange} pageData={pageData} />
    )

    expect(container).toBeInTheDocument()
  })

  it('handles first link click', () => {
    const { getByRole } = render(
      <Pagination onChange={onChange} pageData={pageData} />
    )
    const button = getByRole('button', { name: 'first' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(1)
  })

  it('handles last link click', () => {
    const { getByRole } = render(
      <Pagination onChange={onChange} pageData={pageData} />
    )
    const button = getByRole('button', { name: 'last' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(pageData.totalPages)
  })

  it('handles previous link click', () => {
    const { getByRole } = render(
      <Pagination
        onChange={onChange}
        pageData={{ ...pageData, currentPage: 2 }}
      />
    )
    const button = getByRole('button', { name: 'prev' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledWith(1)

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('handles next link click', () => {
    const { getByRole } = render(
      <Pagination
        onChange={onChange}
        pageData={{ ...pageData, currentPage: 8 }}
      />
    )
    const button = getByRole('button', { name: 'next' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledWith(9)

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('handles page link click', () => {
    const { getByRole } = render(
      <Pagination
        onChange={onChange}
        pageData={{ ...pageData, currentPage: 8 }}
      />
    )
    const button = getByRole('button', { name: 'page-7' })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)

    expect(onChange).toHaveBeenCalledWith(7)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

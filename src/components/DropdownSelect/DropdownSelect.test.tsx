import { render, fireEvent, screen } from '@testing-library/react'
import DropdownSelect from './DropdownSelect'

const options = ['Option 1', 'Option 2', 'Option 3']
const label = 'Select an option'
const preselected = 'Option 1'
const handleValueChange = jest.fn()

describe('DropdownSelect', () => {
  it('renders label and options correctly', () => {
    render(
      <DropdownSelect
        label={label}
        options={options}
        preselected={preselected}
        handleValueChange={handleValueChange}
      />
    )
    const labelElement = screen.getByText(label)
    const selectElement = screen.getByRole('combobox')

    expect(labelElement).toBeInTheDocument()
    expect(selectElement).toBeInTheDocument()

    options.forEach((option) => {
      const optionElement = screen.getByText(option)
      expect(optionElement).toBeInTheDocument()
    })

    expect(selectElement).toHaveValue(preselected)
  })

  it('handles option change correctly', () => {
    render(
      <DropdownSelect
        label={label}
        options={options}
        preselected={preselected}
        handleValueChange={handleValueChange}
      />
    )
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: 'Option 3' } })

    expect(handleValueChange).toHaveBeenCalledTimes(1)
  })
})

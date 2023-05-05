import { StyledDropdownSelect } from './style'
import { ComponentProps } from './types'

const DropdownSelect = ({
  label,
  options,
  preselected,
  dataType = 'number',
  handleValueChange
}: ComponentProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (dataType === 'number') {
      handleValueChange(Number(event.target.value))
      return
    }
    handleValueChange(event.target.value)
  }
  return (
    <StyledDropdownSelect>
      <label>{label}</label>
      <select onChange={handleChange} value={preselected}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </StyledDropdownSelect>
  )
}
export default DropdownSelect

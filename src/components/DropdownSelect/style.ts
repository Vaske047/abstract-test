import styled from 'styled-components'

export const StyledDropdownSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    &:focus {
      border: 1px solid rgb(8, 17, 89);
      outline: none;
    }
  }
`

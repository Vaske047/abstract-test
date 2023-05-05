import styled from 'styled-components'

export const StyledSidebar = styled.div`
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 40px 20px;
  color: #707881;
  box-sizing: border-box;
`

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: ease all 0.3s;
  &:hover {
    color: #081159;
    background-color: #fff;
  }
`

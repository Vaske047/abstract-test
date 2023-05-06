import styled from 'styled-components'

export const StyledListWrapper = styled.div`
  width: 100%;
  padding: 40px;
`

export const StyleListItemsWrapper = styled.div`
  max-height: 70vh;
  width: 100%;
  overflow-y: scroll;
`

export const StyledList = styled.div`
  flex-grow: 1;
  margin-bottom: 40px;
`

export const StyledListHeader = styled.div`
  display: flex;
  background-color: #f7f7f7;
  border-radius: 6px;
`

export const StyledHeaderItem = styled.div`
  padding: 10px;
  flex-basis: 25%;
`

export const StyledListRow = styled.div`
  display: flex;
  transition: all ease 0.3s;
  border-radius: 6px;
  img {
    width: 40px;
    border-radius: 50%;
  }
  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`

export const StyledListRowItem = styled.div`
  padding: 10px;
  flex-basis: 25%;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const StyledListNav = styled.div`
  display: flex;
  justify-content: space-between;
`

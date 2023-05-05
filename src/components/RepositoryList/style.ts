import styled from 'styled-components'

export const StyledListWrapper = styled.div`
  width: 100%;
`

export const StyleListItemsWrapper = styled.div`
  max-height: 70vh;
  width: 100%;
  overflow-y: scroll;
`

export const StyledList = styled.div`
  padding: 40px;
  flex-grow: 1;
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
  img {
    width: 40px;
    border-radius: 50%;
  }
`

export const StyledListRowItem = styled.div`
  padding: 10px;
  flex-basis: 25%;
  display: flex;
  align-items: center;
  gap: 10px;
`

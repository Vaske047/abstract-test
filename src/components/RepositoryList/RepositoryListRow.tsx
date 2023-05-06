import { useNavigate } from 'react-router-dom'

import { StyledListRow, StyledListRowItem } from './style'
import { ListRowProps } from './types'

const RepositoryListRow = ({ rowData }: ListRowProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/single-repository', {
      state: { owner: rowData.owner.login, name: rowData.name }
    })
  }
  return (
    <StyledListRow key={rowData.id as number} onClick={handleClick}>
      <StyledListRowItem>{rowData.name}</StyledListRowItem>
      <StyledListRowItem>{rowData.stargazers_count}</StyledListRowItem>
      <StyledListRowItem>{rowData.forks_count}</StyledListRowItem>
      <StyledListRowItem>
        <img src={rowData.owner.avatar_url} alt='avatar' />
        {rowData.owner.login}
      </StyledListRowItem>
    </StyledListRow>
  )
}

export default RepositoryListRow

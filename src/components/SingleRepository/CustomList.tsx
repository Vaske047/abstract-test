import { StyledCustomList, StyledCustomListItem } from './style'

const CustomList = ({ data, activeList }: any) => {
  const reducedData =
    activeList === 'contributors' ? data.slice(0, 10) : Object.keys(data)

  return (
    <StyledCustomList>
      {reducedData.map((item: any) => (
        <StyledCustomListItem>
          {activeList === 'contributors' ? (
            <>
              <img src={item.avatar_url} alt='contributor-avatar' />
              <p>{item.login}</p>
            </>
          ) : (
            <p>{item}</p>
          )}
        </StyledCustomListItem>
      ))}
    </StyledCustomList>
  )
}

export default CustomList

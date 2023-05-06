import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import { fetchSingleRepository } from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import {
  StyledSingleRepository,
  StyledRepoHeader,
  StyledImgHolder,
  StyledInfo,
  StyledBackButton,
  StyledRepoNav
} from './style'
const SingleRepository = () => {
  const location = useLocation()

  const [
    doFetchSingleRepository,
    isLoadingRepositories,
    loadingRepositoriesError
  ] = useThunk(fetchSingleRepository)

  const { data } = useSelector((state: any) => {
    return state.singleRepository
  })

  useEffect(() => {
    console.log(location.state)
    if (typeof doFetchSingleRepository === 'function')
      doFetchSingleRepository({
        owner: location.state.owner,
        name: location.state.name
      })
  }, [doFetchSingleRepository])

  return (
    <StyledSingleRepository>
      <StyledBackButton>
        <Link to='/'>Back to repositories</Link>
      </StyledBackButton>
      <StyledRepoHeader>
        <StyledImgHolder>
          <img src={data?.owner?.avatar_url} alt='avatar' />
          <p>{data?.owner?.login}</p>
        </StyledImgHolder>
        <StyledInfo>
          <h4>{data?.name}</h4>
          <ul>
            {data?.license && <li>{data?.license?.name}</li>}
            <li>{data?.stargazers_count} stars</li>
            <li>{data?.forks_count} forks</li>
            <li>{data?.open_issues_count} open issues</li>
          </ul>
        </StyledInfo>
      </StyledRepoHeader>
      <StyledRepoNav>
        <li>Contributor</li>
        <li>Programming languages</li>
      </StyledRepoNav>
      {/* <p>contributors_url</p>
      <p>languages_url</p> */}
    </StyledSingleRepository>
  )
}
// ● Repository name
// ● Number of stars
// ● Number of forks
// ● Owner’s name
// ● Owner’s avatar
// ● Number of open issues
// ● Contributor list (display first 10)
// ● List of applied programming languages
// ● ... any other information you find useful

export default SingleRepository

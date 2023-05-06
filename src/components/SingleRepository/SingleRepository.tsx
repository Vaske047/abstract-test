import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import {
  fetchSingleRepository,
  fetchLanguages,
  fetchContributors
} from '../../store'
import { useThunk } from '../../hooks/use-thunk'

import LoadingSpinner from '../../icons/LoadingSpinner'

import {
  StyledSingleRepository,
  StyledRepoHeader,
  StyledImgHolder,
  StyledInfo,
  StyledBackButton,
  StyledRepoNav,
  StyledSpinner,
  StyledRepoNavItem
} from './style'

import CustomList from './CustomList'
import ArrowLeft from '../../icons/ArrowLeft'

const SingleRepository = () => {
  const [activeTab, setActiveTab] = useState<string>('contributors')
  const location = useLocation()

  const [doFetchSingleRepository, isLoadingSingleRepository] = useThunk(
    fetchSingleRepository
  )

  const [doFetchLanguages] = useThunk(fetchLanguages)

  const [doFetchContributors] = useThunk(fetchContributors)

  const repository = useSelector((state: any) => state.singleRepository).data
  const languages = useSelector((state: any) => state.languages).data
  const contributors = useSelector((state: any) => state.contributors).data

  useEffect(() => {
    if (typeof doFetchSingleRepository === 'function') {
      doFetchSingleRepository({
        owner: location.state.owner,
        name: location.state.name
      })
    }
  }, [doFetchSingleRepository, location.state.owner, location.state.name])

  useEffect(() => {
    if (
      typeof doFetchLanguages === 'function' &&
      repository &&
      !isLoadingSingleRepository
    ) {
      doFetchLanguages({ link: repository.languages_url })
    }
  }, [doFetchLanguages, repository, isLoadingSingleRepository])

  useEffect(() => {
    if (
      typeof doFetchContributors === 'function' &&
      repository &&
      !isLoadingSingleRepository
    ) {
      doFetchContributors({ link: repository.contributors_url })
    }
  }, [doFetchContributors, repository, isLoadingSingleRepository])

  return (
    <StyledSingleRepository>
      {isLoadingSingleRepository ? (
        <StyledSpinner>
          <LoadingSpinner />
        </StyledSpinner>
      ) : (
        <>
          <StyledBackButton>
            <Link to='/'>
              <ArrowLeft />
              Back to repositories
            </Link>
          </StyledBackButton>
          <StyledRepoHeader>
            <StyledImgHolder>
              <img src={repository?.owner?.avatar_url} alt='avatar' />
              <p>{repository?.owner?.login}</p>
            </StyledImgHolder>
            <StyledInfo>
              <h4>{repository?.name}</h4>
              <ul>
                {repository?.license && <li>{repository?.license?.name}</li>}
                <li>{repository?.stargazers_count} stars</li>
                <li>{repository?.forks_count} forks</li>
                <li>{repository?.open_issues_count} open issues</li>
              </ul>
            </StyledInfo>
          </StyledRepoHeader>
          <StyledRepoNav>
            <StyledRepoNavItem
              onClick={() => setActiveTab('contributors')}
              isActive={activeTab === 'contributors'}
            >
              Contributors
            </StyledRepoNavItem>
            <StyledRepoNavItem
              onClick={() => setActiveTab('languages')}
              isActive={activeTab === 'languages'}
            >
              Programming languages
            </StyledRepoNavItem>
          </StyledRepoNav>
          <CustomList
            activeList={activeTab}
            data={activeTab === 'contributors' ? contributors : languages}
          />
        </>
      )}
    </StyledSingleRepository>
  )
}

export default SingleRepository

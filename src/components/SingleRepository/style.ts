import styled from 'styled-components'

export const StyledSingleRepository = styled.div`
  max-width: 60vw;
  margin: 40px auto;
  padding: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 6px;
`

export const StyledRepoHeader = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`

export const StyledImgHolder = styled.div`
  img {
    max-width: 200px;
    border-radius: 50%;
  }
  p {
    margin: 20px 0 0;
    font-size: 24px;
    font-weight: 600px;
    text-align: center;
  }
`

export const StyledInfo = styled.div`
  h4 {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    li {
      background-color: #081159;
      color: #fff;
      font-size: 12px;
      padding: 5px 10px;
      border-radius: 6px;
    }
  }
`

export const StyledBackButton = styled.div`
  display: flex;
  a {
    padding: 10px;
    background-color: #081159;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
  }
`
export const StyledRepoNav = styled.ul`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 10px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  li {
    paddiing: 10px;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    color: #a1a1a1;
    &:hover {
      box-shadow: inset 0 -2px 0 0 #081159;
      color: #081159;
    }
  }
`

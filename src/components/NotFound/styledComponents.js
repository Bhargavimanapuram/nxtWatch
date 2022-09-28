import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const NotFoundImg = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const TrendingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const NotFoundContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const NoVideosFoundHeading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`
export const NoVideosFoundDes = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#383838' : '#f4f4f4')};
  margin-top: 5px;
`

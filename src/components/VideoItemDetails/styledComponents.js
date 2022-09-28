import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const VideoContentContainer = styled.div`
  padding: 30px;
  width: 100%;
`
export const VideoContainer = styled.div`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`
export const VideoDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const VideoCardSpecifications = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#606060' : '#cccccc')};
  font-size: 15px;
  margin-right: 15px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const NoVideosImage = styled.img`
  margin-top: 50px;
  max-width: 400px;
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
export const TrendingRetryButton = styled.button`
  background-color: #4f46e5;
  color:#ffffff;
  font-family:"Roboto"
  font-size:16px;
  padding:8px 16px 8px 16px;
  border:0;
  border-radius:3px;
  margin-bottom:10px;
`
export const VideoSpecificationsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoSpecificationsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 10px;
`
export const VideoChannelDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
  margin-bottom: 0;
`
export const VideoChannelSpecifications = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#606060' : '#cccccc')};
  font-size: 14px;
  margin-right: 15px;
  margin-top: 0;
`
export const ChannelSpecificationsContainer = styled.div`
  display: flex;
`
export const ChannelSpecificationsDes = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#606060' : '#cccccc')};
  font-size: 15px;
  margin-right: 15px;
`
export const CommentButton = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  font-size: 15px;
  margin-right: 15px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  display: flex;
  align-items: center;
`

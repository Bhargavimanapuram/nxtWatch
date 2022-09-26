import styled from 'styled-components'

export const VideoItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-right: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    width: 250px;
    height: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 320px;
  }
`
export const VideoItemCardContentContainer = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const VideoCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoCardContent = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? ' #383838' : '#f9f9f9')};
  font-size: 15px;
`
export const VideoCardLogo = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#606060' : '#cccccc')};
  font-size: 15px;
  margin-top: 0;
  margin-right: 10px;
`

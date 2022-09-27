import styled from 'styled-components'

export const TrendingCardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`
export const TrendingImageCard = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
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
  margin-left: 15px;
`

export const VideoCardContent = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? ' #383838' : '#f9f9f9')};
  font-size: 20px;
  font-weight: 600;
`
export const VideoCardLogo = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#606060' : '#cccccc')};
  font-size: 15px;
  margin-top: 0;
  margin-right: 20px;
`

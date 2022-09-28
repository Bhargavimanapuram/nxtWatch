import styled from 'styled-components'

export const GamingCardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-right: 30px;
`
export const GamingImageCard = styled.img`
  width: 150px;
  @media screen and (min-width: 576px) {
    width: 220px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 996px) {
    width: 280px;
  }
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

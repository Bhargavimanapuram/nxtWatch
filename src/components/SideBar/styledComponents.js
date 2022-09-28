import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    width: 25%;
    background-color: ${props => (props.isLightTheme ? '#ffffff' : '#212121')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  @media screen and (min-width: 996px) {
    width: 20%;
    height: 100vh;
  }
`

export const SideBarListContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0;
`

export const SideBarListItem = styled.li`
  background-color: ${props => {
    if (props.isLightTheme && props.isActive) {
      return '#cbd5e1'
    }
    if (!props.isLightTheme && props.isActive) {
      return '#383838'
    }
    return ''
  }};
  color: ${props => (props.isActive ? '#ff0000' : '#909090')};
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
`

export const HomeSideMenuBarBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 16px;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.isLightTheme ? '#00306e' : '#f9f9f9')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SocialMediaImage = styled.img`
  height: 36px;
  width: 36px;
  margin: 8px;
`
export const SocialMediaDescription = styled.p`
  color: ${props => (props.isLightTheme ? '#00306e' : '#f9f9f9')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const NavLinkContent = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
  margin-left: 15px;
  color: ${props => (props.isLightTheme ? '#0f0f0f' : '#ffffff')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  margin-top: 2px;
`

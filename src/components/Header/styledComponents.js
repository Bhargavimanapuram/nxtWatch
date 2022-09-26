import styled from 'styled-components'

export const NavContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#ffffff' : '#212121')};
`
export const HeaderContentMobile = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderContentScreen = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeaderLogo = styled.img`
  height: 25px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`
export const HeaderItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 0;
  list-style-type: none;
`
export const HeaderItems = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 25px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isLightTheme ? '#3b82f6' : '#ffffff')};
  border: ${props =>
    props.isLightTheme ? '1px solid #3b82f6' : '1px solid #ffffff'};
  border-radius: 5px;
  padding: 6px 12px 6px 12px;
`

export const CrossIconButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 32px;
  outline: none;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavLinksList = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
`
export const LogoutPopupContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoutPopupPara = styled.p``

export const ButtonItem = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0;
`
export const NavPopUpModalContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#ffffff' : '#212121')};
  width: 320px;
  height: 180px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavPopUpModalMsg = styled.p`
  color: ${props => (props.isLightTheme ? '#00306e' : '#f1f5f9')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 16px;
`

export const NavPopUpModalLogOutCancelBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.isLightTheme ? '#616e7c' : '#f9f9f9')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  border: ${props =>
    props.isLightTheme ? '1px solid #616e7c' : '1px solid #f9f9f9'};
  border-radius: 3px;
  outline: none;
  margin-left: 5px;
  margin-right: 5px;
`
export const NavPopUpModalLogOutConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #f9f9f9;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  padding-bottom: 6px;
  border: none;
  border-radius: 3px;
  outline: none;
  margin-left: 5px;
  margin-right: 5px;
`

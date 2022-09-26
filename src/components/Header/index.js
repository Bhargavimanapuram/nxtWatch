import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'

import {
  HeaderContentMobile,
  HeaderContentScreen,
  NavContainer,
  HeaderLogo,
  HeaderItemsContainer,
  ButtonItem,
  ProfileImage,
  HeaderItems,
  LogoutButton,
  ButtonsContainer,
  NavPopUpModalContainer,
  NavPopUpModalMsg,
  NavPopUpModalLogOutCancelBtn,
  NavPopUpModalLogOutConfirmBtn,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'
import HeaderPopup from '../HeaderPopup'

const overlayStyles = {
  background: 'rgba(49,49,49,0.8)',
}

const lightThemeStyle = {
  fontSize: '24px',
}
const darkThemeStyle = {
  fontSize: '24px',
  color: '#ffffff',
}

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme, onChangeTheme} = value
        const onClickTheme = () => {
          onChangeTheme()
        }
        const websiteLogo = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        const themeIcon = isLightTheme ? (
          <FaMoon style={lightThemeStyle} />
        ) : (
          <BiSun style={darkThemeStyle} />
        )

        const style = isLightTheme ? lightThemeStyle : darkThemeStyle

        const renderMobileHeader = () => (
          <HeaderContentMobile>
            <Link to="/">
              <HeaderLogo alt="website logo" src={websiteLogo} />
            </Link>
            <HeaderItemsContainer>
              <HeaderItems>
                <ButtonItem data-testid="theme" onClick={onClickTheme}>
                  {themeIcon}
                </ButtonItem>
              </HeaderItems>
              <HeaderItems>
                <HeaderPopup />
              </HeaderItems>
              <HeaderItems>
                <Popup
                  modal
                  trigger={
                    <ButtonItem style={style} type="button">
                      <FiLogOut />
                    </ButtonItem>
                  }
                  overlayStyle={overlayStyles}
                >
                  {close => (
                    <NavPopUpModalContainer isLightTheme={isLightTheme}>
                      <NavPopUpModalMsg isLightTheme={isLightTheme}>
                        Are you sure, you want to logout?
                      </NavPopUpModalMsg>
                      <ButtonsContainer>
                        <NavPopUpModalLogOutCancelBtn
                          isLightTheme={isLightTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </NavPopUpModalLogOutCancelBtn>
                        <NavPopUpModalLogOutConfirmBtn
                          onClick={onClickLogout}
                          isLightTheme={isLightTheme}
                        >
                          Confirm
                        </NavPopUpModalLogOutConfirmBtn>
                      </ButtonsContainer>
                    </NavPopUpModalContainer>
                  )}
                </Popup>
              </HeaderItems>
            </HeaderItemsContainer>
          </HeaderContentMobile>
        )

        const renderScreenHeader = () => (
          <HeaderContentScreen>
            <Link to="/">
              <HeaderLogo alt="nxt watch logo" src={websiteLogo} />
            </Link>
            <HeaderItemsContainer>
              <HeaderItems>
                <ButtonItem onClick={onClickTheme}>{themeIcon}</ButtonItem>
              </HeaderItems>
              <HeaderItems>
                <ProfileImage
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
              </HeaderItems>
              <HeaderItems>
                <Popup
                  modal
                  trigger={
                    <LogoutButton isLightTheme={isLightTheme}>
                      Logout
                    </LogoutButton>
                  }
                  overlayStyle={overlayStyles}
                >
                  {close => (
                    <NavPopUpModalContainer isLightTheme={isLightTheme}>
                      <NavPopUpModalMsg isLightTheme={isLightTheme}>
                        Are you sure, you want to logout?
                      </NavPopUpModalMsg>
                      <ButtonsContainer>
                        <NavPopUpModalLogOutCancelBtn
                          isLightTheme={isLightTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </NavPopUpModalLogOutCancelBtn>
                        <NavPopUpModalLogOutConfirmBtn
                          onClick={onClickLogout}
                          isLightTheme={isLightTheme}
                        >
                          Confirm
                        </NavPopUpModalLogOutConfirmBtn>
                      </ButtonsContainer>
                    </NavPopUpModalContainer>
                  )}
                </Popup>
              </HeaderItems>
            </HeaderItemsContainer>
          </HeaderContentScreen>
        )

        return (
          <NavContainer isLightTheme={isLightTheme}>
            {renderMobileHeader()}
            {renderScreenHeader()}
          </NavContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)
